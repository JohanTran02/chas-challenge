"use client"

import { Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { camera } from "@/app/lib/CC_Backend/camera";
import CameraError from "./CameraError";
import { useCookies } from "react-cookie";
import CameraLoader from "./CameraLoader";
import { Stampinfo } from "@/app/lib/definitions";
import ImageHandler from "../ImageHandler";
import { getUserLocation } from "@/app/lib/map/geolocation";

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
}) {
    const [imageResultContent, setImageResultContent] = useState<ReactNode>(null)

    useEffect(() => {
        console.log(isLoading)
        if (isLoading.includes("finished")) {
            setTransition("opacity-0 pointer-events-none")
            setUnlockedImg(image);
        }
        else if (isLoading.includes("rejected")) {
            setImageResultContent(<CameraError isLoading={isLoading} addOpacity />)
            setUnlockedImg(null);
        }
        else {
            setImageResultContent(null)
            setUnlockedImg(null);
        }

    }, [isLoading, setImageResultContent, setTransition, prop, image, setUnlockedImg])

    return imageResultContent;
}

export default function Camera({ prop, setTransition, handleCamera, setUnlockedImg }: {
    prop: Stampinfo,
    setTransition: Dispatch<SetStateAction<string>>,
    setUnlockedImg: Dispatch<SetStateAction<string | null>>,
    handleCamera: () => void
}) {
    const [isLoading, setLoading] = useState<"idle" | "pending" | "finished" | "rejected">("idle");
    const [cookies] = useCookies(["accessToken"]);
    const webcamRef = useRef<Webcam>(null);
    const [image, setImage] = useState<string | null>("");
    const [enableWebcam, setEnableWebcam] = useState<boolean>(true);
    const [coords, setCoords] = useState<GeolocationCoordinates | undefined>();
    const [imageResponse, setImageResponse] = useState<{
        code: number | undefined;
        json: any;
    }>({} as {
        code: number | undefined;
        json: any;
    });
    const imageResultContent = useImageContent({ isLoading, setTransition, setUnlockedImg, prop, image });

    useEffect(() => {
        getUserLocation("get", setCoords)
    }, [setCoords])

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
                <div className="relative h-[70%] gap-5 w-full">
                    <CameraLoader isLoading={isLoading} />
                    {(isLoading !== "idle" && isLoading !== "pending") && imageResultContent}
                    {
                        enableWebcam ? (
                            <>
                                <Webcam
                                    className="webcam object-cover h-full border-2 border-white rounded-md"
                                    audio={false}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    videoConstraints={videoConstraints}
                                    screenshotQuality={1}
                                />
                                <div className="flex justify-center mt-4" onClick={capture}>
                                    <ImageHandler image={{
                                        height: 32,
                                        width: 32,
                                        src: "Kameraknapp.svg",
                                        alt: "Camera button",
                                        className: "object-cover w-20 h-20",
                                    }}
                                    />
                                </div>
                            </>)
                            : (<>
                                {
                                    image && image ?
                                        <>
                                            <ImageHandler image={{
                                                checkPath: true,
                                                src: image,
                                                alt: "Scan",
                                                width: 32,
                                                height: 32,
                                                className: "object-cover h-full w-full border-2 border-white rounded-md",
                                            }} />
                                            <div className="flex flex-col gap-3 w-full max-w-48 mx-auto mt-4">
                                                {
                                                    (isLoading.includes("idle")) &&
                                                    <button className="rounded-2xl bg-white text-darkGreen p-2 font-semibold text-lg" onClick={async () => {
                                                        setLoading("pending");
                                                        getUserLocation("get", setCoords);
                                                        const updatedImage = await camera("ai/readimage", image as string, cookies.accessToken, prop.name, [coords?.latitude.toString() as string, coords?.longitude.toString() as string,], setLoading);
                                                        setImageResponse(updatedImage)
                                                    }}>Ladda upp foto</button>
                                                }
                                                <button className="rounded-3xl text-white bg-darkGreen border-2 border-white p-2 font-semibold text-lg justify-self-end" onClick={enableCamera}>Ta nytt foto</button>
                                            </div >
                                        </> : <>
                                            <div className="relative grid h-full gap-5 w-full bg-white rounded-md">
                                                <CameraError isLoading={isLoading} addOpacity={true} />
                                            </div>
                                            <div className="flex flex-col gap-3 w-full max-w-48 mx-auto mt-4">
                                                <button className="rounded-3xl text-white bg-darkGreen border-2 border-white p-2 font-semibold text-lg" onClick={() => enableCamera()}>Ta nytt foto</button>
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

