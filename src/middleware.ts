import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Constant-time string comparison so response timing doesn't leak the password.
function safeEqual(a: string, b: string): boolean {
  const enc = new TextEncoder();
  const x = enc.encode(a);
  const y = enc.encode(b);
  let diff = x.length ^ y.length;
  const len = Math.max(x.length, y.length);
  for (let i = 0; i < len; i++) diff |= (x[i] ?? 0) ^ (y[i] ?? 0);
  return diff === 0;
}

export function middleware(request: NextRequest) {
  const password = process.env.ADMIN_PASSWORD;

  // Fail closed: if the password isn't configured, nobody gets in.
  if (!password) {
    return new NextResponse('Admin is turned off because ADMIN_PASSWORD is not set.', { status: 503 });
  }

  const header = request.headers.get('authorization') || '';
  const [scheme, encoded] = header.split(' ');
  if (scheme === 'Basic' && encoded) {
    try {
      const decoded = atob(encoded);
      const i = decoded.indexOf(':');
      const user = decoded.slice(0, i);
      const pass = decoded.slice(i + 1);
      if (i >= 0 && safeEqual(user, 'admin') && safeEqual(pass, password)) {
        return NextResponse.next();
      }
    } catch {
      // fall through to 401
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="HSP Admin"' },
  });
}

// The events API commits to GitHub, so it needs the same login as the admin pages.
export const config = {
  matcher: ['/admin/:path*', '/api/events/:path*', '/api/events'],
};
