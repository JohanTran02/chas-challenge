import styles from "./camera.module.css"

export default function CameraLoader({ isLoading }: { isLoading: "idle" | "pending" | "finished" | "rejected" }) {
    const transition = isLoading.includes("pending") ? "transition-opacity opacity-100" : "transition-opacity opacity-0";
    return (
        <div className={`${transition} absolute h-[600px] w-full z-30 rounded-md bg-white duration-500`}>
            <div className={`${styles.loader} absolute top-1/2 left-1/2`}></div>
        </div>
    )
}