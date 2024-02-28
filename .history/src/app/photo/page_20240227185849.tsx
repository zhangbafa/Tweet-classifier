export default async function Page() {
    const res = await fetch('https://picsum.photos/v2/list?page=2&limit=100')
    const photos = await res.json()
    return (
        <div>
            <h1>Photos</h1>
            {photos.map(({id,url,author}:{id:string,url:string,author:any})=>(
                <div>
                    <img src={url} key={id}/>
                </div>
            ))}
        </div>
    )
}