// middleware.js
import { NextResponse } from 'next/server'
 
// 中间件可以是 async 函数，如果使用了 await
export function middleware(request) {
    console.log('middleware')
  return NextResponse.redirect(new URL('/', request.url))
}

// 设置匹配路径
export const config = {
  matcher: '/:path?',
}
