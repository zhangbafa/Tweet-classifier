import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
export async function GET(request:NextRequest) {
    // console.log(params)
    // notFound()
    // const searchParams = request.nextUrl.searchParams
    // const query = searchParams.get('id') // query
    // const resp =  Date.now().toString()
    // return Response.json({resp:query})

    //02.27
    // const response = NextResponse.next()
    const cookieStore = cookies()
  const token = cookieStore.get('token')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token}` },
  })

  }