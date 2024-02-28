import Image from "next/image"

export async function generateMetadata(){
  return {
    title:'ssss'
  }
}



export default function Page() {
    return (
      <>
      <h1>Hello, About!</h1>
      <Image src="/liu.webp" width={100} height={100} alt="s"/>
      </>
    )
}
  