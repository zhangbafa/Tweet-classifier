import { NextFetchEvent, NextMiddleware, NextRequest } from "next/server"

export function withMiddleware1(middleware:NextMiddleware) {
    return async(request:NextRequest,event: NextFetchEvent)=>{
      const url = request.url
      console.log(`withMiddleware1=>`,{url})
      Response.redirect(new URL('/sign',request.url))
      return middleware(request,event)
    }
  }