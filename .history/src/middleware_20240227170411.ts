// middleware.js
import { NextRequest, NextResponse } from 'next/server'
// 中间件可以是 async 函数，如果使用了 await
export function middleware(request:NextRequest) {
  const {pathname, searchParams} = request.nextUrl
  console.log(request.url)
  return NextResponse.redirect(new URL('/',request.url))
  // console.log({pathname,sort:searchParams.get('sort')})
  // let cookie = request.cookies.get('nextjs')
  // console.log(cookie)
  // const allCookies  = request.cookies.getAll()
  // console.log(allCookies)
  // console.log(request.cookies.get('token'))
  // request.cookies.delete('token')
  // console.log(request.cookies.has('token'))
  // console.log(request.cookies.get('token'))
  // request

  //header
  // const requestHeaders = new Headers(request.headers)
  // // requestHeaders.set('x-hello-from-middleware1','hello')
  // const response = NextResponse.next()
  // response.headers.set("-hello-from-middleware1",'sdfsdf')
  // return response
  // return NextResponse.redirect(new URL('/', request.url))


}

// 设置匹配路径
export const config = {
  matcher: '/about/:path*',
}
