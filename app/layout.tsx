import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "La Fleur | World Cup 2026 | Get Your Business Online for Toronto's Biggest Moment",
  description: 'A once-in-a-lifetime economic surge is coming to Toronto. Get your business World Cup ready in 5 days. Limited spots available.',
  openGraph: {
    title: "La Fleur | World Cup 2026",
    description: 'A once-in-a-lifetime economic surge is coming to Toronto. Get your business World Cup ready in 5 days. Limited spots available.',
    url: 'https://worldcup.la-fleur.digital',
    siteName: 'La Fleur',
    images: [
      {
        url: 'https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/claude/world-cup-generate-page-vuHuO/Feature%20image%20-%20Home.png',
        width: 1200,
        height: 630,
        alt: 'La Fleur — World Cup 2026 Toronto',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "La Fleur | World Cup 2026",
    description: 'Get your business World Cup ready in 5 days. Limited spots available.',
    images: ['https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/claude/world-cup-generate-page-vuHuO/Feature%20image%20-%20Home.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/claude/world-cup-generate-page-vuHuO/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body><div className="overflow-x-clip">{children}</div></body>
    </html>
  )
}
