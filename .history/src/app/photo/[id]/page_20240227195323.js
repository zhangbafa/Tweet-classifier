export default async function PhotoPage({ params: { id } }) {
  const res = await fetch(`https://picsum.photos/id/${id}/info`)
  const info = await res.json()
  return (
    <div>
      id:{info.id}

    </div>
  )
}
