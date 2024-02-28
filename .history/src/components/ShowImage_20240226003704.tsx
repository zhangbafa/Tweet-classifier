import Image from "next/image"
export default function ShowImage({src}){
    console.log(src)
    return (
        <>
            <Image 
            src={src}
            width={100}
            height={100}
            alt="liu"
            />
        </>
    )
}