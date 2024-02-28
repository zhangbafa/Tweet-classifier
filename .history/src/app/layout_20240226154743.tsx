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

export default function RootLayout({ children, auth,modal }:
  {
    children:ReactNode 
    auth: ReactNode
    modal: ReactNode
  }) {
  return (
    <html>
      <Script src="//unpkg.com/layui@2.9.6/dist/layui.js"/>
      <Script>
        {/* {`console.log('sxript');alert('okok')`} */}
      </Script>
      <body className={inter.className}>
        <div className="bg-gray-50 h-10 text-center flex justify-center items-center"> 
          <div className="m-4">
            <Link href="/">Home</Link>  
          </div>
          <div className="m-4">
           <Link href="/about/aa">About</Link>
          </div>
          <div className="m-4">
          <Link href="/posts/">Photo</Link>
          </div> 
        </div>
        <div><Link href="/login">Open Auth Modal:{inter.variable}</Link></div>
        <div><Link href="/">Back To Home</Link></div>
        <h1>root layout</h1>
        <hr/>
        {children}
        {modal}
      </body>
    </html>
  )
}
