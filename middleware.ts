import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname; //Current pathname
  
	// Get a cookie
	const session = request.cookies.get('Session'); 
  if(!session && (path !== '/signin') || path === '/') return NextResponse.redirect(new URL('/signin', request.url));
  if(session && (path === '/signin' || path === '/')) return NextResponse.redirect(new URL('/dashboard', request.url));

  NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/signin',
    '/dashboard/:path*',
  ]
}