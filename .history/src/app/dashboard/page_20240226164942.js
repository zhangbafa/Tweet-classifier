// app/about/page.js
export async function getData(){
  const res = await fetch('https://picsum.photos/seed/picsum/200/300')
  if(!res.ok) throw new Error('faild fetch')
  return res.json()
}
export default async function Page() {
    const photos = await getData()
    console.log(photos)
    return (
      <div className="p-24">

      </div>
    )
  }
  