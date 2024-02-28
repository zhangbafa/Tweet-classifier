import Link from "next/link"
import {Inter} from 'next/font/google'
import localFont from 'next/font/local'
import Script from "next/script"
import './globals.css'
const inter = Inter({
  subsets:['latin'],
  display:'swap',
  variable:'--font-inter',
  weight:'200',
  style:['normal'],
  fallback:['system-ui'],
  preload:true,
})

// const myFont = localFont({
//   src:'',
//   display:'swap'
// })
export default function RootLayout({ children, auth,modal }) {
  return (
    <html>
      <Script src="//unpkg.com/layui@2.9.6/dist/layui.js"/>
      <Script>
        {/* {`console.log('sxript');alert('okok')`} */}
      </Script>
      <body className={inter.className}>
        <div className="bg-gray-50 h-40 text-center flex justify-center items-center"> 
          logo
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
