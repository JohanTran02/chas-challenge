"use client"

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { camera } from "@/app/lib/CC_Backend/camera";
import Image from "next/image";
import CameraError from "./CameraError";
import { useCookies } from "react-cookie";
import CameraLoader from "./CameraLoader";
import { isProdImage } from "@/app/lib/definitions";
import CompletedMission from "../Components/achievements/CompletedMission";

const videoConstraints: MediaTrackConstraints = {
    facingMode: "environment",
    frameRate: 30
};

function useImageContent({ isLoading, handleModal }: { isLoading: "idle" | "pending" | "finished" | "rejected", handleModal: () => void }) {
    const [imageResultContent, setImageResultContent] = useState<ReactNode>(null)

    useEffect(() => {
        if (isLoading.includes("finished")) {
            setImageResultContent(<CompletedMission />)
        }
        else if (isLoading.includes("rejected")) {
            setImageResultContent(<CameraError isLoading={isLoading} addOpacity />)
        }
        else setImageResultContent(null)
    }, [isLoading, setImageResultContent, handleModal])

    return imageResultContent;
}

export default function Camera({ handleModal }: { handleModal: () => void }) {
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
    const imageResultContent = useImageContent({ isLoading, handleModal });

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
            <div className="bg-darkGreen fixed top-0 right-0 w-full h-full p-8 z-30">
                <p className="text-white underline pb-4 cursor-pointer" onClick={handleModal}>Tillbaka</p>
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
                                    <Image
                                        height={0}
                                        width={0}
                                        src={"/Images/Kameraknapp.svg"}
                                        alt="Camera button"
                                        className="object-cover w-20 h-20"
                                    />
                                </div>
                            </>)
                            : (<>
                                {/* {
                                    image ?
                                        <>
                                            <Image
                                                src={image}
                                                alt="Scan"
                                                width={0}
                                                height={0}
                                                className="object-cover h-[600px] w-full rounded-md"
                                            />
                                            <div className="flex flex-col gap-3 w-full max-w-48 mx-auto">
                                                <button className="rounded-xl bg-white text-darkGreen p-1 font-semibold text-lg" onClick={async () => {
                                                    setLoading("pending");
                                                    const updatedImage = await camera("ai/readimage", image as string, cookies.accessToken);;
                                                    setImageResponse(updatedImage)
                                                    setTimeout(() => {
                                                        imageResponse.code === 200 && imageResponse.json ? setLoading("finished") : setLoading("rejected");
                                                    }, 2 * 1000);
                                                }}>Ladda upp foto</button>
                                                <button className="rounded-xl bg-white text-darkGreen p-1 font-semibold text-lg" onClick={() => enableCamera()}>Ta nytt foto</button>
                                            </div >
                                        </> : <>
                                            <div className="relative grid h-[600px] gap-5 w-full bg-white rounded-md">
                                                <CameraError isLoading={isLoading} addOpacity={true} />
                                            </div>
                                            <div className="flex flex-col gap-3 w-full max-w-48 mx-auto">
                                                <button className="rounded-xl bg-white text-darkGreen p-1 font-semibold text-lg" onClick={() => enableCamera()}>Ta nytt foto</button>
                                            </div>
                                        </>} */}
                                {

                                    <>
                                        <Image
                                            src={"https://u-img.com/detail_images/821x646/lamborghini-speed-821-2.jpg"}
                                            alt="Scan"
                                            width={0}
                                            height={0}
                                            className="object-cover h-[600px] w-full rounded-md"
                                        />
                                        <div className="flex flex-col gap-3 w-full max-w-48 mx-auto">
                                            <button className="rounded-xl bg-white text-darkGreen p-1 font-semibold text-lg" onClick={async () => {
                                                setLoading("pending");
                                                const updatedImage = await camera("ai/readimage", image as string, cookies.accessToken);
                                                setImageResponse(updatedImage)
                                                setTimeout(() => {
                                                    imageResponse.code === 200 && imageResponse.json ? setLoading("finished") : setLoading("rejected");
                                                }, 2 * 1000);
                                            }}>Ladda upp foto</button>
                                            <button className="rounded-xl bg-white text-darkGreen p-1 font-semibold text-lg" onClick={() => enableCamera()}>Ta nytt foto</button>
                                        </div >
                                    </>}

                            </>)
                    }
                </div>

            </div >
        </>
    );
}

