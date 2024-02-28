export default async function PhotoPage({ params: { id } }) {
  const res = await fetch(`https://picsum.photos/id/${id}/info`)
  const {id,author,width,height,url,download_url} = await res.json()
  return (
    <div children>
      id:{info.id}

    </div>
  )
}
