import Link from "next/link"
import {Inter} from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  subsets:['latin'],
  display:'swap',
  variable:'--font-inter'
})

const myFont = localFont({
  src:'',
})
export default function RootLayout({ children, auth,modal }) {
  return (
    <html>
      <body className={`${inter.variable}`}>
        <div><Link href="/login">Open Auth Modal</Link></div>
        <div><Link href="/">Back To Home</Link></div>
        <h1>root layout</h1>
        <hr/>
        {children}
        {modal}
      </body>
    </html>
  )
}