"use server";

import { cookiesForUser } from '@/app/lib/definitions';
import { NextRequest, NextResponse } from 'next/server';
// import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export async function POST({ request }: { request: Request }) {
    const test = await request.json();
    console.log(test);
    try {
        return new Response('Hello, Next.js!', {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                "Content-Type": "application/json",
                'Set-Cookie': `Session=${test}`
            },
        })
    }
    catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 500 })
        }
    }
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