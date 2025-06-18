// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
