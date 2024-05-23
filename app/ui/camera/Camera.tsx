"use client"

import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Image from "next/image";
import styles from "@/app/ui/camera/camera.module.css"
// import { camera } from "@/app/lib/CC_Backend/camera";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

async function sendImage(base64: string) {
    // const { code, json } = await camera("ai/readimage", base64);
    // if (code === 200) {
    //     console.log(json);
    // }
    // return;
}

export default function WebcamCapture() {
    const webcamRef = useRef<Webcam>(null);
    const [image, setImage] = useState<string | null>("");

    const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
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
        facingMode: facingMode,
        frameRate: 30
    };

    const handleClick = useCallback(() => {
        setFacingMode((prevState) =>
            prevState === FACING_MODE_USER
                ? FACING_MODE_ENVIRONMENT
                : FACING_MODE_USER
        );
    }, []);

    const enableCamera = () => {
        setEnableWebcam((prev) => !prev);
    }

    console.log({ videoConstraints });

    return (
        <>
            <div className="webcam-container relative w-full p-8">
                {
                    enableWebcam ? (
                        <>
                            <Webcam
                                className="webcam object-cover h-[500px]"
                                audio={false}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                videoConstraints={videoConstraints}
                                screenshotQuality={1}
                            />
                            <div className="flex flex-col gap-3 max-w-48 m-auto mt-5">
                                <button className="rounded-xl bg-black text-white p-1" onClick={capture}>Ta bild</button>
                                <button className="rounded-xl bg-white text-black border-2 border-black p-1" onClick={handleClick}>Byt kamera</button>
                            </div>
                        </>)
                        : (image &&
                            <>
                                <Image
                                    src={image}
                                    alt="Scan"
                                    width={0}
                                    height={0}
                                    className="object-cover h-[500px] w-full"
                                />
                                <div className="flex flex-col gap-3 max-w-48 m-auto mt-5">
                                    <button className="rounded-xl bg-black text-white p-1" onClick={() => sendImage(image.replace("data:image/jpeg;base64,", "") as string)}>Ladda upp foto</button>
                                    <button className="rounded-xl bg-white text-black border-2 border-black p-1" onClick={enableCamera}>Ta nytt foto</button>
                                </div>
                            </>
                        )
                }
            </div >
        </>
    );
}

