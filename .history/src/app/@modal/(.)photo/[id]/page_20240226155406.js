import {photos} from '../../../data';
export default function PhotoModal({ params: { id } }) {
  const photo = photos.find((p) => p.id === id)
  const handlerClick = ()=>{
    alert('sdf')
  }
  return (
    <div className="modal" onClick={handlerClick}>
      <img style={{width: '200', position: 'fixed', top: '120px'}} src={photo.src}/>
    </div>
  )
}
