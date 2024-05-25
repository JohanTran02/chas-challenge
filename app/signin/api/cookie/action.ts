"use server";

import { cookiesForUser } from '@/app/lib/definitions';
import { NextRequest, NextResponse } from 'next/server';
// import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export async function POST({ request }: { request: NextRequest }) {
    return new NextResponse('Hello, Next.js!', {
        status: 200,
        headers: { 'Set-Cookie': `token=${request.body}` },
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