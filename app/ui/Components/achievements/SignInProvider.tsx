'use client'

import { useRouter } from 'next/navigation';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'

export default function SignInProvider({ children }: { children: ReactNode }) {
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);

    return (
        <>
            <CookiesProvider>
                {children}
            </CookiesProvider >
        </>
    )
}