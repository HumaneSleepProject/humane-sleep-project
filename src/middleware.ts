import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const auth = request.headers.get('authorization') || '';
    const expected = 'Basic ' + Buffer.from(`admin:${process.env.ADMIN_PASSWORD}`).toString('base64');
    
    if (auth !== expected) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Events Admin"',
        },
      });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}; 