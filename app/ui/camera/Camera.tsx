"use client"

import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { camera } from "@/app/lib/CC_Backend/camera";
import CameraButtons from "./CameraButtons";
import styles from "./camera.module.css"

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

async function sendImage(base64: string) {
    const { code, json } = await camera("ai/readimage", base64);
    if (code === 200) {
        console.log(json);
    }
    return;
}

export default function WebcamCapture() {
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
        facingMode: FACING_MODE_ENVIRONMENT,
        frameRate: 30
    };

    // const handleClick = useCallback(() => {
    //     setFacingMode((prevState) =>
    //         prevState === FACING_MODE_USER
    //             ? FACING_MODE_ENVIRONMENT
    //             : FACING_MODE_USER
    //     );
    // }, []);

    const enableCamera = () => {
        setEnableWebcam((prev) => !prev);
    }

    console.log({ videoConstraints });

    return (
        <>
            <div className="relative w-full h-full p-8">
                {/* <p className="text-white">Tillbaka</p>
                <div className="grid place-content-center bg-white h-[600px] w-full">
                    <div className={`${styles.loader}`}></div>
                    <section className="flex flex-col px-12">
                        <h1 className="font-bold text-6xl">Ojdå!</h1>
                        <div className="text-lg">
                            <p className="my-8">Det ser ut som att ditt foto inte fångade rätt objekt. Försök igen och se till att fokusera på rätt mål.</p>
                            <h2 className="font-bold">Tips:</h2>
                            <p>Var noga med detaljerna på objektet du försöker fotografera.</p>
                        </div>
                    </section>
                </div>
                <div className="grid place-items-center mt-4">
                    <CameraButtons />
                </div> */}

                {/* {
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
                                    <button className="rounded-xl bg-black text-white p-1" onClick={() => sendImage(image.replace("data:image/jpeg;base64,", "") as string)}>Ladda upp foto</button>
                                    <button className="rounded-xl bg-white text-black border-2 border-black p-1" onClick={enableCamera}>Ta nytt foto</button>
                                </div>
                            </>
                        )
                } */}
            </div >
        </>
    );
}

