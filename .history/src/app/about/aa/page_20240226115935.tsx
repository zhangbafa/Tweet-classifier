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
      https://youtu.be/07LY4tM1z2g?si=W2GzptcHlcn7dPY1
      <iframe src="https://youtu.be/07LY4tM1z2g?si=W2GzptcHlcn7dPY1" frameBorder={0} allowFullScreen></iframe>
      </>
    )
}
  