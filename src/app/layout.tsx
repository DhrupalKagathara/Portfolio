import './globals.css'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { ThemeProvider } from '../utils/theme-provider'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Dhrupal Kagathra',
  description:
    'An extensive display of my full-stack development skills, experiences, and projects, demonstrating my proficiency and commitment to coding.',
  icons: {
    icon: [
      {
        url: '/logo-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: ReactNode }): React.ReactElement {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <html lang="en" suppressHydrationWarning>
        <body className={poppins.className}>
          <Header />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ThemeProvider>
  )
}
