import Link from "next/link"
export default function RootLayout({ children, team, analytics }) {
  return (
    <html>
      <body>
        <div><Link href="/login">Open Auth Modal</Link></div>
        <div><Link href="/">Back To Home</Link></div>
        <h1>root layout</h1>
        {children}
        {team}
        {analytics}
      </body>
    </html>
  )
}
