'use client'
import Image from "next/image"

const imageLoader = ({src,width,quality}) => {
    return `${src}`
}
export default function ShowImage({src,width,height,alt}:{src:string,width:number,alt:string,height
:number}){
    return (
        <div className="relative h-10">
            <Image 
            fill
            src={src}
            width={100}
            height={100}
            loader={imageLoader}
            alt={alt}
            className="rounded object-cover"
            />
        </div>
    )
}