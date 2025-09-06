import { RootState } from '@/store'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useSelector } from 'react-redux'
import { ROLE } from './types/users.types'

export function Middleware(request: NextRequest) {
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth)

  if (!user || !isLoggedIn || user.role === ROLE.USER) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*',
}
