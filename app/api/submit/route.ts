import { NextResponse } from 'next/server'

const ADMIN_EMAIL = 'admin@la-fleur.ca'
const CONTACT_EMAIL = 'hello@la-fleur.ca'
const FROM = 'La Fleur <noreply@la-fleur.digital>'

export async function POST(req: Request) {
  const { bizName, email, pkg } = await req.json()

  if (!bizName || !email || !pkg) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }

  const send = (payload: object) =>
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

  // ── Admin notification ──────────────────────────────────────
  await send({
    from: FROM,
    to: ADMIN_EMAIL,
    subject: `New spot claimed: ${bizName}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#0d0c0a;color:#fff;border-radius:12px">
        <h2 style="color:#cb983a;margin:0 0 24px">New Spot Claimed</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:10px 0;color:#999;width:140px">Business</td><td style="padding:10px 0;font-weight:600">${bizName}</td></tr>
          <tr><td style="padding:10px 0;color:#999">Email</td><td style="padding:10px 0">${email}</td></tr>
          <tr><td style="padding:10px 0;color:#999">Package</td><td style="padding:10px 0;color:#f0c060;font-weight:600">${pkg}</td></tr>
        </table>
        <p style="margin:24px 0 0;color:#666;font-size:13px">Follow up within 24 hours.</p>
      </div>
    `,
  })

  // ── User confirmation ───────────────────────────────────────
  await send({
    from: FROM,
    to: email,
    subject: 'Your spot is claimed. You\'re World Cup ready.',
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#0d0c0a;color:#fff;border-radius:12px">
        <h2 style="color:#cb983a;margin:0 0 8px">Spot Claimed.</h2>
        <p style="color:#999;margin:0 0 24px;font-size:16px">Hi ${bizName}, you're on the list.</p>
        <p style="line-height:1.7;color:#ccc">You've reserved your <strong style="color:#f0c060">${pkg}</strong> spot. We'll reach out within 24 hours to get things moving before the World Cup kicks off.</p>
        <p style="line-height:1.7;color:#ccc">If you have any questions in the meantime, reply to this email or reach us at <a href="mailto:${CONTACT_EMAIL}" style="color:#cb983a">${CONTACT_EMAIL}</a>.</p>
        <p style="margin:32px 0 0;color:#555;font-size:12px">La Fleur · Toronto · worldcup.la-fleur.digital</p>
      </div>
    `,
  })

  return NextResponse.json({ ok: true })
}
