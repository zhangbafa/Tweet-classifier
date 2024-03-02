import Link from "next/link"
import {photos} from './data'
import Image from "next/image"
export const dynamic = 'force-dynamic'
// export const revalidate = 10
export default async function Page() {
  return (
    <main className="container">
    {photos.map(({ id, src }) => (
      <Link key={id} href={`/photo/${id}`}>
        <Image 
          width={100}
          height={100}
          alt={id}
          src={src}></Image>
      </Link>
    ))}
  </main>
  )
}
