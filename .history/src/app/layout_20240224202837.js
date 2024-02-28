import Link from "next/link"
export default function RootLayout({ children, auth }) {
  return (
    <html>
      <body>
        <div><Link href="/login">Open Auth Modal</Link></div>
        <div><Link href="/">Back To Home</Link></div>
        <h1>root layout</h1>
        <hr/>
        {children}
        {auth}
      </body>
    </html>
  )
}
