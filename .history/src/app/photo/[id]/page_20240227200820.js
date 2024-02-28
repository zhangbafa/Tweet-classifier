import Link from "next/link"

export default async function PhotoPage({ params }) {
  const uri = `https://picsum.photos/id/${params.id}/info`
  let res = await fetch(uri)
  const {id,author,width,height,url,download_url} = await res.json()
  return (
    <div className="text-left w-12/12 p-10 m-auto bg-gray-50">
      <button className="bg-blue-100 p-3 rounded-md text-gray-600 hover:bg-gray-300">
        Back Photos List
      </button>
      <div className="mt-8 flex justify-start">
        <span>{author}</span>
      </div>

    </div>
  )
}
