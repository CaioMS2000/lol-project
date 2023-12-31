import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LOL',
  description: 'Sistema de informações sobre o League of Legends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='bg-zinc-900'>
      <body className={"bg-zinc-900 " + inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
