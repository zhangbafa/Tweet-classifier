import ShowImage from "@/components/ShowImage"
export default function Page({params,searchParams}) {
  console.log(`params:${JSON.stringify(searchParams)}`)
    return (
      <>
      <h1>Hello, About!</h1>
      <ShowImage 
        src="/liu.webp"
        width={640}
        height={4803}
        alt="liu"
      />
      </>
    )
}
  