import Image from "next/image"
import { useRouter } from "next/navigation"
export default async function PhotoPage({ params }:{params:{id:string}}) {
  const router = useRouter()

  return (
    <div className="text-left w-12/12 p-10 m-auto bg-gray-50 fixed absolute left-10 top-10">
        <h1>关闭弹窗</h1>
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
