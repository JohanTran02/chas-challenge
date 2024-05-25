"use server";

import { cookies } from 'next/headers'
import { cookiesForUser } from './definitions';

// import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export async function createCookie({ user }: { user: cookiesForUser }) {
    cookies().set({
        name: 'Session',
        value: JSON.stringify(user),
        httpOnly: false,
        secure: true,
        path: '/chas-challenge',
    })
}

// export const getCookie = (name: string) => {
//     const cookie = cookies().get(name);

//     if (cookie) {
//         const value = cookie.value;
//         console.log(JSON.parse(value))
//         return JSON.parse(value);
//     }

//     return;
// }

// export const getCookieToken = (name: 'Session') => {
//     const cookie = cookies().get(name);

//     if (cookie) {
//         const value = cookie.value;
//         return value;
//     }

//     return // undefined
// }