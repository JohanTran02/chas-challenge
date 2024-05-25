import { NextRequest, NextResponse } from 'next/server'
const allowedOrigins = ['https://johantran02.github.io/chas-challenge']

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname; //Current pathname

  // Check the origin from the request
  const origin = request.headers.get('origin') ?? ''
  const isAllowedOrigin = allowedOrigins.includes(origin)

  // Handle preflighted requests
  const isPreflight = request.method === 'OPTIONS'

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    }
    return NextResponse.json({}, { headers: preflightHeaders })
  }

  // Handle simple requests
  const response = NextResponse.next()

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Get a cookie
  const session = request.cookies.get('Session');
  if (!session && (path !== '/chas-challenge/signin') || path === '/chas-challenge') return NextResponse.redirect(new URL('/chas-challenge/signin', request.url));
  if (session && (path === '/chas-challenge/signin' || path === '/chas-challenge')) return NextResponse.redirect(new URL('/chas-challenge/dashboard', request.url));

  return response
}

export const config = {
  matcher: [
    '/api/:path*',
    '/chas-challenge',
    '/chas-challenge/signin',
    '/chas-challenge/dashboard/:path*',
  ]
}