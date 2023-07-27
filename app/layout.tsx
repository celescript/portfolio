import './globals.css'
import { clx } from '@/utils/clx'

// fonts
import { Inter } from 'next/font/google'
import { AppHooks } from './app-hooks'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={clx(inter.className, 'bg-black')}>
        <AppHooks />
        {children}
      </body>
    </html>
  )
}
