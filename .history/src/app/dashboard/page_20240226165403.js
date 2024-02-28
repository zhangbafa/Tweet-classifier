// app/about/page.js
export async function getData(){
  const res = await fetch('https://picsum.photos/v2/list',{cache:'default'})
  if(!res.ok) throw new Error('faild fetch')
  console.log(`https://picsum.photos/v2/list`)
  return res.json()
}
export default async function Page() {
    const photos = await getData()
    const photos1 = await getData()
    // console.log(photos)
    return (
      <div className="p-24">

      </div>
    )
  }
  