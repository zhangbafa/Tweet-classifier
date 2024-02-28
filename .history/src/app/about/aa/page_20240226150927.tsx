import ShowImage from "@/components/ShowImage"
import styles from './styles.module.css'
export default function Page({params,searchParams}) {
  console.log(`params:${JSON.stringify(searchParams)}`)
    return (
      <>
      <h1 className={styles.h1}>Hello, About!</h1>
      <ShowImage 
        src="/liu.webp"
        width={640}
        height={483}
        alt="liu"
      />
      <iframe src="//player.bilibili.com/player.html?aid=1050496675&bvid=BV1aH4y1h7n9&cid=1431932130&p=1" 
      scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
      </>
    )
}
  