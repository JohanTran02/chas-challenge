'use client'

import { useRouter } from 'next/navigation';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'


export function useDebounce(setLoading: Dispatch<SetStateAction<boolean>>, seconds: number): ReactNode {

    useEffect(() => {
        const handler = setTimeout(() => {
            setLoading(false);
        }, seconds * 1000);

        return () => clearTimeout(handler)
    }, [setLoading, seconds]);

    return;
}

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
    const [isLoading, setLoading] = useState(true);
    const router = useRouter();
    useDebounce(setLoading, 1);

    useEffect(() => {
        if (cookies.accessToken) {
            router.push("/chas-challenge/dashboard")
            console.log("cookie finns", cookies.accessToken)
        }
        else {
            router.push("/chas-challenge/signin")
            console.log("finns ingen cookie for accesstoken", undefined)
        }
    }, [router, cookies])

    return (
        <>
            {isLoading && <div className='bg-black w-full h-full absolute bottom-0 z-30'>test</div>}
            <CookiesProvider>
                {children}
            </CookiesProvider >
        </>
    )
}