"use client"

import { useCookies } from "react-cookie"
import GetStarted from "./GetStarted"
import Update from "./Update"
import { ReactNode, useEffect, useState } from "react"

export default function ShowUserContent() {
    const [cookies] = useCookies(["accessToken"])
    const [content, setContent] = useState<ReactNode | null>(null)

    useEffect(() => {
        let element;
        element = cookies.accessToken ? <Update /> : <GetStarted />
        return () => setContent(element)
    }, [cookies])

    return (
        <div className="absolute w-full h-[calc(100vh-(100px+53px))] top-0 right-0 z-20">
            {content}
        </div>
    )
}