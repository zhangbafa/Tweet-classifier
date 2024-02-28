// middleware.js
import { NextResponse } from 'next/server'
// 中间件可以是 async 函数，如果使用了 await
export function middleware(request) {
  const {pathname, searchParams} = request.nextUrl
  console.log({pathname,sort:searchParams.get('sort')})
  

  // return NextResponse.redirect(new URL('/', request.url))
}

// 设置匹配路径
export const config = {
  matcher: '/about/:path*',
}
