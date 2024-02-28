import { NextRequest } from "next/server"
import { sql } from "@vercel/postgres"

export async function GET(request: NextRequest) {
    //https://cn.bing.com/HPImageArchive.aspx
    /**
     * mkt zh-CN en-US ja-JP en-Au en-UK de-De en-NZ en-CA
     * &pid=hp&w=384&h=316&rs=1&c=4
     */
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

     await sql`INSERT INTO wallpaper (date_at, url, title, copyright,)
     VALUES(${currentDate},${photo.urlbase},${photo.title},${photo.copyright})`
    //  await c.env.DB.prepare('INSERT INTO wallpaper (url) VALUES (?)').bind(urls).run()
    //  return c.text("success")
   } catch(error:any) {
     console.log(`Error:${error.message}`)
   }
}

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

     await sql`INSERT INTO wallpaper (date_at, url, title, copyright,)
     VALUES(${currentDate},${photo.urlbase},${photo.title},${photo.copyright})`
    //  await c.env.DB.prepare('INSERT INTO wallpaper (url) VALUES (?)').bind(urls).run()
    //  return c.text("success")
   } catch(error:any) {
     console.log(`Error:${error.message}`)
   }
}

UPDATE wallpaper
SET url = CONCAT('/th?id=',url)
WHERE id = 1;

DELETE FROM wallpaper;
ALTER SEQUENCE wallpaper_id_seq RESTART WITH 1;