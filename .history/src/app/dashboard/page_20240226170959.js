// app/about/page.js
export const dynamic = 'force-dynamic'
export async function getData(){
  const res = await fetch('http://localhost:8787/time',{next:{revalidate:100}})
  if(!res.ok) throw new Error('faild fetch')
  // console.log(`https://picsum.photos/v2/list`)
  return res.json()
}

export async function getBooks(){
  const res = await fetch('http://localhost:8787/time',{next:{revalidate:10}})
  if(!res.ok) throw new Error('faild fetch')
  // console.log(`https://picsum.photos/v2/list`)
  return res.json()
}

export default async function Page() {
    const photos = await getData()
    const getBooks = await getBooks()
    console.log(`photos:${photos}`)
    console.log(`books:${books}`)
    return (
      <div className="p-24">

      </div>
    )
  }
  