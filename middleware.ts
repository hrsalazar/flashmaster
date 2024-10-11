import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If there's no session and the user is trying to access a protected route, redirect to login
  if (!session && (req.nextUrl.pathname.startsWith('/decks') || req.nextUrl.pathname.startsWith('/practice'))) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  // If there's a session and the user is trying to access auth routes, redirect to decks
  if (session && (req.nextUrl.pathname.startsWith('/auth'))) {
    return NextResponse.redirect(new URL('/decks', req.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}