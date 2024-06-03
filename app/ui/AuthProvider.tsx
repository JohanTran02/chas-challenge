'use client';

import { useRouter } from 'next/navigation';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import Loader from './Components/Loader';

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
    const router = useRouter();

    useDebounce(setLoading, 1);

    useEffect(() => {
        if (cookies.accessToken) {
            router.push("/dashboard");
        } else {
            router.push("/signin");
        }
    }, [router, cookies]);

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
