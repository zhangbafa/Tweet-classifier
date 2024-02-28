import Link from "next/link"

export default async function PhotoPage({ params }) {
  const uri = `https://picsum.photos/id/${params.id}/info`
  let res = await fetch(uri)
  const {id,author,width,height,url,download_url} = await res.json()
  return (
    <div className="text-center w-12/12 p-10 m-auto bg-gray-50">
      <Link>
        Back Photos List
      </Link>
      <div className="mt-20 flex justify-start">
        <span>id:{id}</span>
        <span>author:{author}</span>
      </div>

    </div>
  )
}
