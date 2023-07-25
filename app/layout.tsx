import './globals.css'
import { clx } from '@/utils/clx'

// fonts
import { Inter } from 'next/font/google'
import { AppHooks } from './app-hooks'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Atomic Design Starter',
  description:
    'A starter repository for Next.js using Atomic Design and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={clx(inter.className)}>
        <AppHooks />
        {children}
      </body>
    </html>
  )
}
