function withMiddleware1(middleware:NextMiddleware) {
    return async(request:NextRequest,event: NextFetchEvent)=>{
      const url = request.url
      console.log(`withMiddleware=>`,{url})
      return middleware(request,event)
    }
  }