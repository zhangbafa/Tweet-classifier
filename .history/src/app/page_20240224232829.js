import Link from "next/link"
import {photos} from './data'
export default async function Page() {
  const data = await fetch('/api/posts')
  console.log(data.json())
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
