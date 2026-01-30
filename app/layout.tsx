import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VISIONARY - Unlock the most instinctive interface',
  description: 'Gesture Recognition for wearables',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
