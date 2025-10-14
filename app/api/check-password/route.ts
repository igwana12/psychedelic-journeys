import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  // Set your password here
  const SITE_PASSWORD = 'B4lls'; // Change this to your desired password

  if (password === SITE_PASSWORD) {
    const response = NextResponse.json({ success: true });

    // Set a cookie that expires in 7 days
    response.cookies.set('site-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
