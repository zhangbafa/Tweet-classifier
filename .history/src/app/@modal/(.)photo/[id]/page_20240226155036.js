import {photos} from '../../../data';
import { useRouter } from 'next/router'
export default function PhotoModal({ params: { id } }) {
  const photo = photos.find((p) => p.id === id)
  const router = useRouter()
  return (
    <div className="modal">
      <img style={{width: '200', position: 'fixed', top: '120px'}} src={photo.src} onClick={router.back()}/>
    </div>
  )
}
