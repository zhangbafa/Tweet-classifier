import Image from "next/image"
export default function ShowImage({src,width,height,alt}:{src:string,width:number,alt:string,height
:number}){
    return (
        <>
            <Image 
            src={src}
           
            alt={alt}
            objectFit="cover"
            />
        </>
    )
}