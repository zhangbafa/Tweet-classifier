'use client'
import {photos} from '../../../data';
import { useRouter } from 'next/navigation'
export default function PhotoModal({ params: { id } }) {
  const photo = photos.find((p) => p.id === id)
  const router = useRouter()
  const handlerClick = ()=>{
    alert('sdf')
  }
  return (
    <div className="modal" onClick={() => router.back()}>
      <img style={{width: '500px',height:'500px', position: 'fixed', top: '120px',left: '20%'}} src={photo.src}/>
    </div>
  )
}
