import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';

export async function get(req: Request) {
 const apiUrl = "https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1"
   try {
     const response = await fetch(apiUrl)
     if(!response.ok){
       throw new Error(`HTTP error! Status: ${response.status}`)
     }
     const data = await response.json()
     const urls = data.images[0]?.url
     return req.json({urls})
    //  await c.env.DB.prepare('INSERT INTO wallpaper (url) VALUES (?)').bind(urls).run()
    //  return c.text("success")
   } catch(error:any) {
     console.log(`Error:${error.message}`)
   }
}