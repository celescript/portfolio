import './globals.css'
import { clx } from '@/utils/clx'

// fonts
import { Inter } from 'next/font/google'
// ubuntu mono
import { Ubuntu_Mono } from 'next/font/google'
import { AppHooks } from './app-hooks'
import { Overlay } from '@/components/overlay'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const ubuntuMono = Ubuntu_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-ubuntu-mono',
})

export const metadata = {
  title: 'Celeste Fernandez Portfolio',
  description:
    'Celeste Fernandez is a software engineer based in Buenos Aires. She is passionate about building beautiful and functional user interfaces.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={clx(
          ubuntuMono.className,
          inter.className,
          'bg-black relative overflow-x-hidden'
        )}
      >
        <AppHooks />
        {children}
        <Overlay />
      </body>
    </html>
  )
}
