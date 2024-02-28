// app/about/page.js
export async function getData(){
  const res = await fetch('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1')
  if(!res.ok) throw new Error('faild fetch')
  return res.json()
}
export default async function Page() {
    const photos = await getData()
    return (
      <div className="p-24">
        
      </div>
    )
  }
  