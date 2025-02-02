import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth()

  const url = req.nextUrl

  // 🔹 Redirect signed-out users to "/"
  if (!userId && !isPublicRoute(req)) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // 🔹 Redirect signed-in users visiting "/" to "/add-job"
  if (userId && url.pathname === '/') {
    return NextResponse.redirect(new URL('/add-job', req.url))
  }

  return NextResponse.next() // Allow request to continue normally
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
