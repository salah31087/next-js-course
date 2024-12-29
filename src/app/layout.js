import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ViewTransitions } from 'next-view-transitions'
import Header from '@/components/Header'

export const metadata = {
  title: 'Next.js',
}

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body className="bg-gray-900 min-h-screen text-white font-sans">
          <Header />
          <main className="container mx-auto">
            {children}
          </main>
        </body>
      </html>
    </ViewTransitions>
  )
}
