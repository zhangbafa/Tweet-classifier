import ShowImage from "@/components/ShowImage"
export default function Page({params}) {
  console.log(`params:${params}`)
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
  