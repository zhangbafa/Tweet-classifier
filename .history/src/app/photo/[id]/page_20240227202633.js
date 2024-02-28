
import Image from "next/image"
// import { useRouter } from "next/navigation"
export default async function PhotoPage({ params }) {
  const uri = `https://picsum.photos/id/${params.id}/info`
  let res = await fetch(uri)
  // const router = useRouter()
  const {id,author,width,height,url,download_url} = await res.json()
  return (
    <div className="text-left w-12/12 p-10 m-auto bg-gray-50">
      {/* <button onClick={()=>router.back()} className="bg-blue-100 p-3 rounded-md text-gray-600 hover:bg-gray-300">
        Back Photos List
      </button> */}
      <div className="mt-8 mb-8 flex justify-start text-gray-900">
        <span>Author: {author}</span>
      </div>
      <div className="overflow-hidden rounded-sm mt-15">
        <Image 
          src={download_url}
          width={500}
          height={500}
          alt={author}
          className="rounded-lg"
        />
      </div>

    </div>
  )
}
