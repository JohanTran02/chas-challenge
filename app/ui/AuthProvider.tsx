'use client';

import Loader from './Components/Loader';
import { useRouter } from 'next/navigation';
import { cookieSettings } from '../lib/definitions';
import { CookiesProvider, useCookies } from 'react-cookie';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

export function useDebounce(setLoading: Dispatch<SetStateAction<boolean>>, seconds: number) {
    useEffect(() => {
        const handler = setTimeout(() => {
            setLoading(false);
        }, seconds * 1000);

        return () => clearTimeout(handler);
    }, [setLoading, seconds]);
}

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
    const [isLoading, setLoading] = useState(true);
    const [accessToken, setAccessToken] = useState<null | string>(cookies.accessToken);
    const router = useRouter();

    const url = window.document.location; 
    const access_token = new URLSearchParams(url.search).get('token');
    console.log(url)
    
    
    if(!accessToken && access_token){
        setCookie('accessToken', access_token, cookieSettings);

    }

    useEffect(() => {
        if (cookies.accessToken) {
            router.push("/dashboard");
        } else {
            router.push("/signin");
        }
    }, [router, cookies]);
    
    
    useDebounce(setLoading, 1);

    return (
        <>
            {
                isLoading ?

                    <div className="fixed inset-0 grid place-content-center bg-darkGreen w-full h-full z-30">
                        <Loader />
                    </div>

                    :

                    <CookiesProvider>
                        {children}
                    </CookiesProvider>
            }
        </>
    );
}
