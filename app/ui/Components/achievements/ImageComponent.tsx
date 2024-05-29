import Image from "next/image";

export default function ImageComponent({ image }: {
    image: {
        src: string,
        alt: string,
        height: number,
        width: number,
        className: string,
    }
}) {

    const isProd = process.env.NODE_ENV === 'production' ? '/chas-challenge/Images' : '/Images';
    //image.src = pressbyrån.svg /chas-challenge/Images/pressbyrån.svg
    //image.src = pressbyrån.svg /Images/pressbyrån.svg
    return (
        <>
            <Image
                src={`${isProd + image.src}`}
                alt={image.alt}

            />
        </>
    )
}