export default async function Page() {
    const res = await fetch('https://picsum.photos/v2/list?page=2&limit=100')
    const photos = await res.json()
    return (
        <div className="text-center w-11/12 p-10 m-auto bg-blue-200">
            <h1>Photos</h1>
            {photos.map(({id,download_url,author}:{id:string,download_url:string,author:any})=>(
                <div>
                    <img src={`https://picsum.photos/id/${id}/367/267`} key={id}/>
                </div>
            ))}
        </div>
    )
}                