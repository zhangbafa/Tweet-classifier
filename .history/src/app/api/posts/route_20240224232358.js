// export const dynamic = 'force-dynamic'

export  function GET(request,{params}) {
    const resp =  Date.now().toString()
    return Response.json({resp})
  }