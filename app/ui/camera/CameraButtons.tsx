"use client"

import { CameraIcon } from "@heroicons/react/24/solid";

export default function CameraButtons({ enableWebcam }: { enableWebcam: boolean }) {
    let content;

    if (enableWebcam) {
        content =
            <div className="w-fit rounded-full border-8 border-[#D9D9D9]">
                <div className="grid place-items-center w-24 h-24 bg-white rounded-full border-4 border-darkGreen">
                    <CameraIcon className="w-20 h-20 object-cover" />
                </div>
            </div>
    } else {
        content =
            <div className="flex flex-col gap-3 w-full max-w-48">
                <button className="rounded-xl bg-white text-darkGreen p-1 font-semibold text-lg">Ladda upp foto</button>
                <button className="rounded-xl bg-white text-darkGreen p-1 font-semibold text-lg">Ta nytt foto</button>
            </div>
    }

    return content;

}