import { notFound } from "next/navigation"




export  function GET(request,{params}) {
    console.log(params)
    // notFound()
    const searchParams = request.nextUrl.searchParams
  const query = searchParams.get() // query
    const resp =  Date.now().toString()
    return Response.json({resp:query})
  }