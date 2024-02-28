import Link from "next/link"
import {Inter} from 'next/font/google'
// import localFont from 'next/font/local'
import Script from "next/script"
// import  { Metadata } from "next"
import { Metadata } from "next"
import './globals.css'
import { format } from "path"
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
  title: '...'
}

export default function RootLayout({ children }:
  {
    children:ReactNode
  }) {
  return (
    <html>
      <Script id="Qw" src="//unpkg.com/layui@2.9.6/dist/layui.js"/>
      <Script id="w2341">
        {/* {`console.log('sxript');alert('okok')`} */}
      </Script>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
