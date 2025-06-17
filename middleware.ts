
// middleware.ts (วางไว้ที่ root ของโปรเจค)
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    console.log('Middleware running for:', req.nextUrl.pathname)
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // ถ้ามี token แสดงว่า login แล้ว
        if (token) return true
        
        return false
      },
    },
    pages: {
      signIn: '/signin', // หน้า sign in ของคุณ
    }
  }
)

export const config = {
  matcher: [
    // '/',
    // '/personal-page',
    // '/satisfaction-page',
  ]
}