import { NextRequest } from "next/server"
import { sql } from "@vercel/postgres"

export async function GET(request: NextRequest) {
    //https://cn.bing.com/HPImageArchive.aspx
    const apiUrl = "https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1"
   try {
     const response = await fetch(apiUrl)
     if(!response.ok){
       throw new Error(`HTTP error! Status: ${response.status}`)
     }
     const data = await response.json()
     const [photo] = data.images
     const urls = data.images[0]?.url

     const currentDate = new Date().toISOString().slice(0, 10)
     const id = await sql`select id from wallpaper order by id desc limit 1`
     const ids = id.rows

    //  await sql`INSERT INTO wallpaper (id,date_at, url, title, copyright)
    //  VALUES(1120,${currentDate},${photo.urlbase},${photo.title},${photo.copyright})`
    return Response.json({error:0,message:'INSERT Success',id:id.rows.id})
    //  return c.text("success")
   } catch(error:any) {
     console.log(`Error:${error.message}`)
   }
}
