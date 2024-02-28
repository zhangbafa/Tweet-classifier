export default async function Page() {
    const res = await fetch('https://picsum.photos/v2/list?page=2&limit=100')
    const photos = await res.json()
    return (
        <div className="text-center w-12/12 p-10 m-auto bg-blue-200">
            <h1 className="pb-20 text-4xl">Photos</h1>
            <div className="flex flex-wrap justify-between">
                {photos.map(({id,download_url,author}:{id:string,download_url:string,author:any})=>(
                    <div className="mb-10 rounded-sm bg-white"> 
                        <img src={`https://picsum.photos/id/${id}/367/267`} key={id}/>
                        <p className="p-4 flex justify-between">
                            <span className="text-left">{author}</span>
                            <span>#{id}</span>
                        </p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}                