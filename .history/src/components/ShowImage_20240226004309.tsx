'use client'
import Image from "next/image"

const imageLoader = (src,width,qu) => {
    return `https://www.baidu.com${src}`
}
export default function ShowImage({src,width,height,alt}:{src:string,width:number,alt:string,height
:number}){
    return (
        <>
            <Image 
            src={src}
            
            loader={imageLoader}
            alt={alt}
            />
        </>
    )
}