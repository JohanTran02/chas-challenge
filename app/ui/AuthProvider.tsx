'use client';

import { useRouter } from 'next/navigation';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import Loader from './Components/Loader';

export function useDebounce(setLoading: Dispatch<SetStateAction<boolean>>, seconds: number) {
    useEffect(() => {
        const handler = setTimeout(() => {
            setLoading(false);
            console.log("Debounce finished, setting loading to false");
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
        console.log("Checking cookies", cookies.accessToken);
        if (cookies.accessToken) {
            console.log("Access token found, redirecting to /dashboard");
            router.push("/dashboard");
        } else {
            console.log("No access token, redirecting to /signin");
            router.push("/signin");
        }
    }, [router, cookies]);


    return (
        <>
            {
                isLoading &&
                <div className="fixed inset-0 grid place-content-center bg-darkGreen w-full h-full z-30">
                    <Loader />
                </div>
            }
            <CookiesProvider>
                {children}
            </CookiesProvider>
        </>
    );
}