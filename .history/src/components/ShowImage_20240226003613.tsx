import Image from "next/image"
export default function ShowImage(a){
    console.log(a)
    return (
        <>
            <Image 
            src="/liu.webp"
            width={100}
            height={100}
            alt="liu"
            />
        </>
    )
}