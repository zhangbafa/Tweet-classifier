import { NextRequest, NextResponse } from "next/server"

export  function GET(request:NextRequest) {
    // console.log(params)
    // notFound()
    // const searchParams = request.nextUrl.searchParams
    // const query = searchParams.get('id') // query
    // const resp =  Date.now().toString()
    // return Response.json({resp:query})

    //02.27
    // const response = NextResponse.next()
    request.cookies.set('token','zhang')
    return NextResponse.json({resp:''})

  }