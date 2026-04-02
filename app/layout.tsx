import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "La Fleur — World Cup 2026 | Get Your Business Online for Toronto's Biggest Moment",
  description: 'A once-in-a-lifetime economic surge is coming to Toronto. Get your business World Cup ready in 3–5 days. Limited spots available.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
