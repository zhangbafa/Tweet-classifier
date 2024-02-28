// export const dynamic = 'force-dynamic'
// app/items/route.js
// export const revalidate = 60
export  function GET(request,{params}) {
    const resp =  Date.now().toString()
    return Response.json({resp:"dddd"})
  }