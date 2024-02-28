'use client'

import Image from "next/image"

// export  function generateMetadata(){
//   return {
//     title:'ssss',
//     description:'zhang'
//   }
// }

const  imageloader = ({src,width,quite})=>{
  return `https://www.baidu.com/${src}`
}

export default function Page() {
    return (
      <>
      <h1>Hello, About!</h1>
      <Image 
        src="/liu.webp" 
        width={100} 
        height={100} 
        loader={imageloader}
        alt="s"/>
      </>
    )
}
  