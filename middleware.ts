// import { NextRequest, NextResponse } from 'next/server'

// export async function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname; //Current pathname
//   console.log(path)

//   // Get a cookie
//   const session = request.cookies.get('Session');
//   if (!session && (path !== '/chas-challenge/signin') || path === '/chas-challenge') return NextResponse.redirect(new URL('/chas-challenge/signin', request.url));
//   if (session && (path === '/chas-challenge/signin' || path === '/chas-challenge')) return NextResponse.redirect(new URL('/chas-challenge/dashboard', request.url));

//   NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/chas-challenge',
//     '/chas-challenge/signin',
//     '/chas-challenge/dashboard/:path*',
//   ]
// }