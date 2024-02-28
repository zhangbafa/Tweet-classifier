'use client'
import Image from "next/image"

const imageLoader = ({src,width,qu}) => {
    return `${src}`
}
export default function ShowImage({src,width,height,alt}:{src:string,width:number,alt:string,height
:number}){
    return (
        <div className="relative h-29">
            <Image 
            fill
            src={src}
            
            loader={imageLoader}
            alt={alt}
            />
        </div>
    )
}