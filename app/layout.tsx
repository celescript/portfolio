import './globals.css'
import { clx } from '@/utils/clx'

// fonts
import { GeistSans, GeistMono } from 'geist/font'

import { AppHooks } from './app-hooks'
import { Overlay } from '@/components/overlay'

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
          GeistSans.variable,
          GeistMono.variable,
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
