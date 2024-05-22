'use server';

import { cookies } from 'next/headers'
import { cookiesForUser } from './app/lib/definitions';

export const createCookie = async ({ user }: { user: cookiesForUser }) => {
  cookies().set({
    name: 'Session',
    value: JSON.stringify(user),
    httpOnly: true,
    path: '/',
  })
}

export const getCookie = async (name: "Session") => {
  const cookie = cookies().get(name);

  if (cookie) {
    const value = cookie.value;

    return JSON.parse(value) as cookiesForUser;
  }

  return;
}