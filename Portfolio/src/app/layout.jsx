import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Antoine Carlu | Portfolio',
  description: 'Portfolio en ligne d\'Antoine Carlu. Développé sur Next.js 14.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
