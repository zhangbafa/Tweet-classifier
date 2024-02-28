import Link from "next/link"
import {photos} from './data'
export default async function Page() {
  const data = await fetch('http://localhost:3000/api/posts?id=100')
  const a = await data.json()
  console.log(a)
  return (
    <main className="container">
    {photos.map(({ id, src }) => (
      <Link key={id} href={`/photo/${id}`}>
        <img width="100" src={src} /> 
      </Link>
    ))}
  </main>
  )
}
