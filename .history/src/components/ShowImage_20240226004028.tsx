import Image from "next/image"

const image
export default function ShowImage({src,width,height,alt}:{src:string,width:number,alt:string,height
:number}){
    return (
        <>
            <Image 
            src={src}
            width={width}
            height={height}
            alt={alt}
            objectFit="cover"
            />
        </>
    )
}