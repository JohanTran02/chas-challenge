"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Image from "next/image";
import { Buffer } from "buffer";
import { Base64 } from "app/lib/definitions";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

function base64ToBytes(base64: string) {
    const binString = Buffer.from(base64);
    console.log(binString.toString("utf-8"))

    // const test = binString.toString("base64");
    // console.log(test);
    // console.log(binString);
    // console.log(binString.toString("utf-8"));
    // console.log(Buffer.from(test, "base64").toString("utf-8"));

    // console.log(binString.toString("utf-8"));

    // console.log(binString.toString("base64url"));
    // const uInt8Array = new Uint8Array(
    //     binString.buffer,
    //     binString.byteOffset,
    //     binString.length / Uint8Array.BYTES_PER_ELEMENT);
    // console.log(binString.toString("base64"));
    // const blob = new Blob([binString], { type: "image/jpeg" })
    // console.log(blob);
    // test(blob)
}

async function test(blob: Blob) {
    const test = new Uint8Array(await blob.arrayBuffer());
    console.log(test);

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
            // base64ToBytes(imageSrc?.replace("data:image/jpeg;base64,", "") as string);
            base64ToBytes(imageSrc as string);
        }
        setEnableWebcam((prev) => !prev);
    }, [webcamRef, setImage]);

    let videoConstraints: MediaTrackConstraints = {
        facingMode: facingMode,
        width: 640,
        height: 360,
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
            <div className="webcam-container relative">
                {
                    <div className="h-[300px]">
                        {
                            enableWebcam ? (
                                <>
                                    <Webcam
                                        className="webcam absolute -z-10 h-full w-auto"
                                        audio={false}
                                        ref={webcamRef}
                                        screenshotFormat="image/jpeg"
                                        videoConstraints={videoConstraints}
                                        screenshotQuality={1}
                                    />
                                    <button onClick={handleClick}>Switch camera</button>
                                    <button onClick={capture}>Take picture</button>
                                </>)
                                : (image &&
                                    <>
                                        <Image
                                            src={image}
                                            alt="Scan"
                                            width={500}
                                            height={200}
                                            className="h-auto w-auto"
                                        />
                                        <button onClick={enableCamera}>Enable camera</button>
                                    </>
                                )
                        }
                    </div>
                }

            </div>
        </>
    );
}

