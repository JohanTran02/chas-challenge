"use client"

import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { camera } from "@/app/lib/CC_Backend/camera";
import Image from "next/image";
// import CameraButtons from "./CameraButtons";
// import CameraLoader from "./CameraLoader";
// import CameraError from "./CameraError";
import { useCookies } from "react-cookie";

// , setLoading: Dispatch<SetStateAction<boolean>>
async function sendImage(base64: string, accessToken: string) {
    const { code, json } = await camera("ai/readimage", base64, accessToken);
    if (code === 200) {
        console.log(json);
    }
    return;
}

export default function Camera() {
    const [cookies] = useCookies(["accessToken"]);
    const webcamRef = useRef<Webcam>(null);
    const [image, setImage] = useState<string | null>("");
    // const [isLoading, setLoading] = useState(true);
    const [enableWebcam, setEnableWebcam] = useState<boolean>(true);

    const capture = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);
        }
        setEnableWebcam((prev) => !prev);
    }, [webcamRef, setImage]);

    let videoConstraints: MediaTrackConstraints = {
        facingMode: "environment",
        frameRate: 30
    };

    const enableCamera = () => {
        setEnableWebcam((prev) => !prev);
    }

    return (
        <>
            {/* <div className="relative w-full h-full p-8">
                <p className="text-white">Tillbaka</p>
                <div className="grid place-content-center bg-white border-2 border-white h-[600px] w-full">
                    {!isLoading && <CameraLoader />}
                    <CameraError />
                </div>
                <div className="grid place-items-center mt-4">
                    <CameraButtons enableWebcam={enableWebcam} setLoading={setLoading} setEnableWebcam={setEnableWebcam} />
                </div>
            </div > */}
            {
                enableWebcam ? (
                    <>
                        <Webcam
                            className="webcam object-cover h-[600px]"
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                            screenshotQuality={1}
                        />
                        <div className="flex flex-col gap-3 max-w-48 m-auto mt-5">
                            <button className="rounded-xl bg-black text-white p-1" onClick={capture}>Ta bild</button>
                        </div>
                    </>)
                    : (<>
                        {image && <>
                            <Image
                                src={image}
                                alt="Scan"
                                width={0}
                                height={0}
                                className="object-cover h-[600px] w-full"
                            />
                            <div className="flex flex-col gap-3 max-w-48 m-auto mt-5">
                                <button className="rounded-xl bg-black text-white p-1" onClick={() => sendImage}>Ladda upp foto</button>
                                <button className="rounded-xl bg-white text-black border-2 border-black p-1" onClick={enableCamera}>Ta nytt foto</button>
                            </div>
                        </>}
                    </>)

            }
        </>
    );
}