"use client"

import { CameraIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function CameraButtons() {
    const [takePicture, setTakePicture] = useState<boolean>(false);

    return (
        <>
            {
                !takePicture ?
                    <div className="w-fit rounded-full border-8 border-[#D9D9D9]" onClick={() => setTakePicture((prev) => !prev)}>
                        <div className="grid place-items-center w-24 h-24 bg-white rounded-full border-4 border-darkGreen">
                            <CameraIcon className="w-20 h-20 object-cover" />
                        </div>
                    </div> :
                    <div className="flex flex-col gap-3 w-full max-w-48">
                        <button className="rounded-xl bg-white text-darkGreen p-1 font-semibold text-lg" >Ladda upp foto</button>
                        <button className="rounded-xl bg-white text-darkGreen p-1 font-semibold text-lg" onClick={() => setTakePicture((prev) => !prev)}>Ta nytt foto</button>
                    </div>
            }
        </>
    )

}