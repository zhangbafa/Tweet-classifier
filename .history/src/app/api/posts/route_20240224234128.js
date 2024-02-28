export const dynamic = 'force-dynamic'
// app/items/route.js
// export const revalidate = 10



export  function GET(request,{params}) {
    console.log(params)
    const searchParams = request.nextUrl.searchParams
  const query = searchParams.get() // query
    const resp =  Date.now().toString()
    return Response.json({resp:query})
  }