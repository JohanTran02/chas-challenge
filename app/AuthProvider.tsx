'use client'

import { useRouter } from 'next/navigation';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'

// export function useDebounceJob(value: Job, seconds: number): JSX.Element {
//     const { jobModalStatus } = useSelector((state: RootState) => state.jobs)

//     const [debouncedJob, setDebouncedValue] = useState<JSX.Element>(<SkeletonDescription />);

//     useEffect(() => {
//         setDebouncedValue(<SkeletonDescription />)
//         const handler = setTimeout(() => {
//             if (jobModalStatus.includes("open")) setDebouncedValue(<JobDescription currentJob={value} />);
//         }, seconds * 1000);

//         return () => clearTimeout(handler)
//     }, [value, seconds, jobModalStatus]);

//     return debouncedJob;
// }

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
            router.push("/dashboard")
            console.log("cookie finns", cookies.accessToken)
        }
        else {
            router.push("/signin")
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