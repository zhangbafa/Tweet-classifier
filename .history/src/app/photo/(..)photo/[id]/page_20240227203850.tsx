
import Image from "next/image"
import Link from "next/link"
// import { useRouter } from "next/navigation"
export default async function PhotoPage({ params }:{params:{id:string}}) {
  const uri = `https://picsum.photos/id/${params.id}/info`
  let res = await fetch(uri)
  // const router = useRouter()
  const {id,author,width,height,url,download_url} = await res.json()
  return (
    <div className="text-left w-12/12 p-10 m-auto bg-gray-50">
        <h1>平行</h1>
      <div className="overflow-hidden rounded-sm mt-15">
        <Image 
          src={`https://picsum.photos/id/${id}/200/200`}
          width={200}
          height={200}
          alt={author}
          className="rounded-lg  bg-black p-3"
        />
      </div>
    </div>
  )
}
