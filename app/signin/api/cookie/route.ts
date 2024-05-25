// import { cookiesForUser } from '@/app/lib/definitions';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
// import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export async function GET(request: Request) { }

export async function POST(request: NextRequest) {

    try {
        // cookies().set({
        //     name: 'Session',
        //     value: JSON.stringify(request.body),
        //     httpOnly: process.env.NODE_ENV !== 'development',
        //     secure: true,
        //     // domain: "https://johantran02.github.io/chas-challenge",
        //     maxAge: 60 * 60 * 24 * 365 * 1000,
        //     sameSite: "none",
        //     path: '/',
        // })

        // request.cookies.set('Session', JSON.stringify(request.body));
        return new NextResponse('Hello, Next.js!', {
            status: 200,
            headers: {
                'Set-Cookie': `Session=test`
            }
        })
        // return new NextResponse('Hello, Next.js!', {
        //     status: 200,
        //     headers: {
        //         "Content-Type": "application/json",
        //         'Set-Cookie': `Session=${request.body}`
        //     },
        // })
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