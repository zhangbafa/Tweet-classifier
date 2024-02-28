// app/about/page.js
export const dynamic = 'force-dynamic'
export async function getData(){
  const res = await fetch('http://localhost:8787/time',{next:{revalidate:60}})
  if(!res.ok) throw new Error('faild fetch')
  // console.log(`https://picsum.photos/v2/list`)
  return res.json()
}
export default async function Page() {
    const photos = await getData()
    const photos1 = await getData()
    console.log(photos)
    console.log(photos1)
    return (
      <div className="p-24">

      </div>
    )
  }
  