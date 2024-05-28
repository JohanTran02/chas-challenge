"use client"

import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { camera } from "@/app/lib/CC_Backend/camera";
import Image from "next/image";
import CameraButtons from "./CameraButtons";
import styles from "./camera.module.css"
import { useCookies } from "react-cookie";
import CameraError from "./CameraError";

async function sendImage(base64: string, accessToken: string) {
    const { code, json } = await camera("ai/readimage", base64, accessToken);
    if (code === 200) {
        console.log(json);
    }
    return;
}

export default function WebcamCapture() {
    const [cookies] = useCookies(["accessToken"]);
    const webcamRef = useRef<Webcam>(null);
    const [image, setImage] = useState<string | null>("");
    // const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
    const [enableWebcam, setEnableWebcam] = useState<boolean>(true);

    const capture = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);

            // base64ToBytes(imageSrc as string);
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
            <div className="relative w-full h-full p-8">
                <p className="text-white">Tillbaka</p>
                <div className="grid place-content-center bg-white h-[600px] w-full">
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
                            : <>
                                <Image
                                    src={"https://images.unsplash.com/photo-1624976172336-54d765427b6b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"}
                                    alt="Scan"
                                    width={0}
                                    height={0}
                                    className="object-cover h-[600px] w-full"
                                />
                                <div className="flex flex-col gap-3 max-w-48 m-auto mt-5">
                                    <button className="rounded-xl bg-black text-white p-1">Ladda upp foto</button>
                                    <button className="rounded-xl bg-white text-black border-2 border-black p-1" onClick={enableCamera}>Ta nytt foto</button>
                                </div>
                            </>
                    }
                </div>
            </div >
        </>
    );
}


{/* {
                        <div className={`${styles.loader}`}></div>
                    <CameraError />
                    <div className="grid place-items-center mt-4">
                    <CameraButtons enableWebcam={enableWebcam} />
                </div>
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
                        : (image &&
                            <>
                                <Image
                                    src={image}
                                    alt="Scan"
                                    width={0}
                                    height={0}
                                    className="object-cover h-[600px] w-full"
                                />
                                <div className="flex flex-col gap-3 max-w-48 m-auto mt-5">
                                    <button className="rounded-xl bg-black text-white p-1"
                                        onClick={() => sendImage(image.replace("data:image/jpeg;base64,", "") as string, cookies.accessToken)}>Ladda upp foto
                                    </button>
                                    <button className="rounded-xl bg-white text-black border-2 border-black p-1" onClick={enableCamera}>Ta nytt foto</button>
                                </div>
                            </>
                        )
                } */}