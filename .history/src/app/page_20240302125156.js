import Link from "next/link"
import {photos} from './data'
export const dynamic = 'force-dynamic'
// export const revalidate = 10
export default async function Page() {
  return (
    <main className="container">
    {photos.map(({ id, src }) => (
      <Link key={id} href={`/photo/${id}`}>
        <img width="100" src={src} alt={id}/> 
        
      </Link>
    ))}
  </main>
  )
}
