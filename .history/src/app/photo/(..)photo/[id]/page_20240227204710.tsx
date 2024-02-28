import Image from "next/image"
import { useRouter } from "next/navigation"
export default async function PhotoPage({ params }:{params:{id:string}}) {
  const router = useRouter()

  return (
    <div className="text-left w-12/12 p-10 m-auto bg-gray-50 fixed absolute left-10 top-10">
      <button onClick={()=>{router.back()}} className="bg-blue-100 p-3 rounded-md text-gray-600 hover:bg-gray-300">
        Back Photos List
      </button>
      <div className="overflow-hidden rounded-sm mt-15">
        <Image 
          src={`https://picsum.photos/id/${id}/200/200`}
          width={200}
          height={200}
          alt="PhotoPage"
          className="rounded-lg  bg-black p-3"
        />
      </div>
    </div>
  )
}
