import './globals.css'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { ThemeProvider } from '../utils/theme-provider'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import DarkVeil from '../components/ui/DarkVeil'
import ClickSpark from 'components/ui/ClickSpark'

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
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        {/* Background effect */}
        <div className="fixed inset-0 -z-10 w-full h-full">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0.08}
            scanlineIntensity={0.12}
            speed={0.5}
            scanlineFrequency={2.5}
            warpAmount={0.08}
            resolutionScale={1}
          />
        </div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClickSpark sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}>

            <Header />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </ClickSpark>
        </ThemeProvider>
      </body>
    </html>

  )
}
