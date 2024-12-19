import { NextRequest, NextResponse } from 'next/server';

import { COOKIE_SESSION_NAME } from './entities/auth';
import { APP_ROUTES } from './shared/routes';

export async function middleware(req: NextRequest) {
  // const { cookies, nextUrl } = req;
  // const session = cookies.get(COOKIE_SESSION_NAME);
  // const isSignInPage = nextUrl.pathname === '/auth/sign-in';
  // console.log('Session:', session);
  // console.log('Is SignInPage:', isSignInPage);
  // console.log('Current Path:', nextUrl.pathname);
  // if (!session && !isSignInPage) {
  //   const signInUrl = APP_ROUTES.signIn();
  //   return NextResponse.redirect(signInUrl);
  // }
  return NextResponse.next();
}

export const config = {
  matcher: ['/']
};
