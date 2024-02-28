
export default function RootLayout({ children, team, sns }) {
  return (
    <html>
      <body>
        <h1>root layout</h1>
        {children}
        {team}
        {sns}
      </body>
    </html>
  )
}
