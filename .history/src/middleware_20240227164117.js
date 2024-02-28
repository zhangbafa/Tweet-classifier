// middleware.js
import { NextResponse } from 'next/server'
// 中间件可以是 async 函数，如果使用了 await
export function middleware(request) {
  const {pathname, searchParams} = request.nextUrl
  console.log({pathname,sort:searchParams.get('sort')})
  // console.log(request)
  // return NextResponse.next()
  request.cookies.clear(token)
  // const allcookies = request.cookies.get('zhang')
  // const response = NextResponse.next()
  // response.cookies.set('token','bear zhang')
  // response.cookies.set({
  //   name:'auth',
  //   value:'zag',
  //   path:'/'
  // })
  // console.log(allcookies)
  // return response


  // return NextResponse.redirect(new URL('/', request.url))
}

// 设置匹配路径
export const config = {
  matcher: '/about/:path*',
}
