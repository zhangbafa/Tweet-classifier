import Link from "next/link"

export default async function PhotoPage({ params: { id } }) {
  const url = 
  let res = await fetch(`https://picsum.photos/id/${id}/info`)
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
