import type { Metadata } from 'next'
import './globals.css'
import { GridPattern, Header } from './constants/barel.components'
import Footer from './components/footer/footer'

export const metadata: Metadata = {
  title: 'Test',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='bg-foreground'>
          <GridPattern />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
