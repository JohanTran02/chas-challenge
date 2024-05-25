"use server";

import { cookiesForUser } from '@/app/lib/definitions';
import { NextRequest, NextResponse } from 'next/server';
// import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export async function OPTIONS(request: NextRequest) {
    const allowedOrigin = request.headers.get("origin");
    const response = new NextResponse("header header", {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": allowedOrigin || "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
                "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
            "Access-Control-Max-Age": "86400",
        },
    });

    return response;
}

export async function POST(request: NextRequest) {
    try {
        return new NextResponse('Hello, Next.js!', {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                'Set-Cookie': `Session=${request.body}`
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