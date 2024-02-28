export const dynamic = 'forcep'
export async function GET(request,{params}) {
    const res = await fetch('https://my-app.1269078063.workers.dev/list?page=1&page_size=10')
    const data = res.json()
    const pathname = request.nextUrl.pathname
    //   // 访问 /home?name=lee, searchParams 的值为 { 'name': 'lee' }
      const searchParams = request.nextUrl.searchParams
    // return searchParams
        const query = searchParams.get('id')
        const token = request.cookies.get('token') || 'ssss'
    return Response.json({data:data})
  }