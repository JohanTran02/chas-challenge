"use client"

import { Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { camera } from "@/app/lib/CC_Backend/camera";
import CameraError from "./CameraError";
import { useCookies } from "react-cookie";
import CameraLoader from "./CameraLoader";
import { Stampinfo } from "@/app/lib/definitions";
import ImageHandler from "../ImageHandler";

const videoConstraints: MediaTrackConstraints = {
    facingMode: "environment",
    frameRate: 30
};

function useImageContent({ isLoading, prop, setTransition, setUnlockedImg, image }: {
    isLoading: "idle" | "pending" | "finished" | "rejected",
    prop: Stampinfo,
    image: string | null,
    setTransition: Dispatch<SetStateAction<string>>,
    setUnlockedImg: Dispatch<SetStateAction<string | null>>,
    // setUnlocked: Dispatch<SetStateAction<boolean>>
}) {
    const [imageResultContent, setImageResultContent] = useState<ReactNode>(null)

    useEffect(() => {
        if (!image) return;

        if (isLoading.includes("finished")) {
            setTransition("opacity-0 pointer-events-none")
            setUnlockedImg(image);
        }
        else if (isLoading.includes("rejected")) {
            setImageResultContent(<CameraError isLoading={isLoading} addOpacity />)
            setUnlockedImg("");

        }
        else {
            setImageResultContent(null)
            setUnlockedImg("");
        }

    }, [isLoading, setImageResultContent, setTransition, prop, image, setUnlockedImg])

    return imageResultContent;
}

export default function Camera({ prop, setTransition, handleCamera, setUnlockedImg }: {
    prop: Stampinfo,
    setTransition: Dispatch<SetStateAction<string>>,
    // setUnlocked: Dispatch<SetStateAction<boolean>>,
    setUnlockedImg: Dispatch<SetStateAction<string | null>>,
    handleCamera: () => void
}) {
    const [isLoading, setLoading] = useState<"idle" | "pending" | "finished" | "rejected">("idle");
    const [cookies] = useCookies(["accessToken"]);
    const webcamRef = useRef<Webcam>(null);
    const [image, setImage] = useState<string | null>("");
    const [enableWebcam, setEnableWebcam] = useState<boolean>(true);
    const [imageResponse, setImageResponse] = useState<{
        code: number | undefined;
        json: any;
    }>({} as {
        code: number | undefined;
        json: any;
    });
    const imageResultContent = useImageContent({ isLoading, setTransition, setUnlockedImg, prop, image });

    const capture = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);
        }
        enableCamera()
    }, [webcamRef, setImage]);

    const enableCamera = () => {
        setLoading("idle");
        setEnableWebcam((prev) => !prev);
    }

    return (
        <>
            <div className="bg-darkGreen w-full h-full p-8">
                <p className="text-white underline pb-4" ><span className="cursor-pointer" onClick={() => {
                    handleCamera()
                    setTimeout(() => {
                        setLoading("idle");
                        setEnableWebcam(true);
                    }, 500);
                }}>Tillbaka</span></p>
                <div className="relative grid h-[600px] gap-5 w-full">
                    <CameraLoader isLoading={isLoading} />
                    {(isLoading !== "idle" && isLoading !== "pending") && imageResultContent}
                    {
                        enableWebcam ? (
                            <>
                                <Webcam
                                    className="webcam object-cover h-[600px] border-2 border-white rounded-md"
                                    audio={false}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    videoConstraints={videoConstraints}
                                    screenshotQuality={1}
                                />
                                <div className="mx-auto mt-4" onClick={capture}>
                                    <ImageHandler image={{
                                        height: 0,
                                        width: 0,
                                        src: "Kameraknapp.svg",
                                        alt: "Camera button",
                                        className: "object-cover w-20 h-20",
                                    }}
                                    />
                                </div>
                            </>)
                            : (<>
                                {
                                    image ?
                                        <>
                                            <ImageHandler image={{
                                                src: image,
                                                alt: "Scan",
                                                width: 0,
                                                height: 0,
                                                className: "object-cover h-[600px] w-full rounded-md",
                                            }} />
                                            <div className="flex flex-col gap-3 w-full max-w-48 mx-auto mt-4">
                                                {
                                                    (isLoading.includes("idle")) &&
                                                    <button className="rounded-2xl bg-white text-darkGreen p-2 font-semibold text-lg" onClick={async () => {
                                                        setLoading("pending");
                                                        const updatedImage = await camera("ai/readimage", image as string, cookies.accessToken);
                                                        setImageResponse(updatedImage)
                                                        setTimeout(() => {
                                                            imageResponse.code === 200 && imageResponse.json ? setLoading("finished") : setLoading("rejected");
                                                        }, 2 * 1000);
                                                    }}>Ladda upp foto</button>
                                                }
                                                <button className="rounded-2xl bg-white text-darkGreen p-2 font-semibold text-lg justify-self-end" onClick={enableCamera}>Ta nytt foto</button>
                                            </div >
                                        </> : <>
                                            <div className="relative grid h-[600px] gap-5 w-full bg-white rounded-md">
                                                <CameraError isLoading={isLoading} addOpacity={true} />
                                            </div>
                                            <div className="flex flex-col gap-3 w-full max-w-48 mx-auto">
                                                <button className="rounded-xl bg-white text-darkGreen p-1 font-semibold text-lg" onClick={() => enableCamera()}>Ta nytt foto</button>
                                            </div>
                                        </>
                                }
                            </>)
                    }
                </div>
            </div >
        </>
    );
}

