import { NextFetchEvent, NextMiddleware, NextRequest } from "next/server"

export function withMiddleware2(middleware:NextMiddleware) {
    return async(request:NextRequest,event: NextFetchEvent)=>{
      const url = request.url
      console.log(`withMiddleware2=>`,{url})
      return middleware(request,event)
    }
  }