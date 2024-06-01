"use client"
import Image from "next/image"
import { ImageType, isProdImage } from "../lib/definitions"

export default function ImageHandler({ image }: { image: ImageType }) {
    return <Image
        priority={image.priority ? image.priority : undefined}
        height={image.height}
        width={image.width}
        src={`${isProdImage + image.src}`}
        alt={image.alt}
        className={image.className}
        style={image.style}
    />
}