import {Inter} from 'next/font/google'
import { Metadata } from "next"
import './globals.css'
import { ReactNode } from "react"
const inter = Inter({
  subsets:['latin'],
  display:'swap',
  variable:'--font-inter',
  style:['normal'],
  fallback:['system-ui'],
  preload:true,
})


export const metadata: Metadata = {
  title: 'Nextjs.org'
}

export default function RootLayout({ children }:
  {
    children:ReactNode
  }) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
