export async function GET(request,{params}) {
    // const res = await fetch('https://dog-api.kinduff.com/api/facts')
    // const data = res.json()
    const pathname = request.nextUrl.pathname
    //   // 访问 /home?name=lee, searchParams 的值为 { 'name': 'lee' }
      const searchParams = request.nextUrl.searchParams
    // return searchParams
        const query = searchParams.get('id')
    return Response.json({dadta:query})
  }