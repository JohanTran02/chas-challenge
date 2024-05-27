'use client'

import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
    const router = useRouter();

    useEffect(() => {
        if (cookies.accessToken) {
            router.push("/dashboard")
            console.log("cookie finns", cookies.accessToken)
        }
        else {
            router.push("/signin/")
            console.log("finns ingen cookie for accesstoken", undefined)
        }
    }, [router, cookies])

    return (
        <>
            <CookiesProvider>
                {children}
            </CookiesProvider >
        </>
    )
}