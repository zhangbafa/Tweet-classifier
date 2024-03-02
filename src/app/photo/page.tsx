import Link from "next/link"
import Image from 'next/image'
export default async function Page() {
    const res = await fetch('https://picsum.photos/v2/list?page=2&limit=100')
    const photos = await res.json()
    return (
        <div className="text-center w-12/12 p-10 m-auto bg-gray-50">
            <h1 className="pb-20 text-4xl">Photos</h1>
            <div className="flex flex-wrap justify-between">
                {photos.map(({id,download_url,author}:{id:string,download_url:string,author:any})=>(
                    <Link key={id} href={`/photo/${id}`}>
                        <div className="mb-10 rounded-sm bg-white overflow-hidden">
                            <Image src={`https://picsum.photos/id/${id}/367/267`} 
                                width={367}
                                height={267}
                                alt={author}
                            ></Image>
                            
                            <p className="p-4 flex justify-between items-center">
                                <span className="text-left">{author}</span>
                                <span className="text-sm bg-gray-300 rounded-xl px-2">#{id}</span>
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            
        </div>
    )
}                
