"use client"

import { CameraIcon } from "@heroicons/react/24/solid";
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import CameraLoader from "./CameraLoader";

export function useDebounce(seconds: number): ReactNode {
    const [debouncedLoader, setDebouncedValue] = useState<ReactNode>(<CameraLoader />);

    useEffect(() => {
        setDebouncedValue(<CameraLoader />)
        const handler = setTimeout(() => {
        }, seconds * 1000);

        return () => clearTimeout(handler)
    }, [seconds]);

    return debouncedLoader;
}

export default function CameraButtons({ enableWebcam, setEnableWebcam, setLoading }: { enableWebcam: boolean, setEnableWebcam: Dispatch<SetStateAction<boolean>>, setLoading: Dispatch<SetStateAction<boolean>> }) {
    let content;

    if (enableWebcam) {
        content =
            <div className="w-fit rounded-full border-8 border-[#D9D9D9]" onClick={() => setEnableWebcam((prev) => !prev)}>
                <div className="grid place-items-center w-24 h-24 bg-white rounded-full border-4 border-darkGreen">
                    <CameraIcon className="w-20 h-20 object-cover" />
                </div>
            </div>
    } else {
        content =
            <div className="flex flex-col gap-3 w-full max-w-48">
                <button className="rounded-xl bg-white text-darkGreen p-1 font-semibold text-lg" onClick={() => setLoading((prev) => !prev)}>Ladda upp foto</button>
                <button className="rounded-xl bg-white text-darkGreen p-1 font-semibold text-lg" onClick={() => setEnableWebcam((prev) => !prev)}>Ta nytt foto</button>
            </div>
    }

    return content;

}