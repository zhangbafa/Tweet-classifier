import ShowImage from "@/components/ShowImage"
import styles from './styles.module.css'
export default function Page() {
  // console.log(`params:${JSON.stringify(searchParams)}`)
    return (
      <>
      <h1 className={styles.h1}>Hello, About!</h1>
      <ShowImage 
        src="/liu.webp"
        width={640}
        height={483}
        alt="liu"
      />
      
      </>
    )
}
  