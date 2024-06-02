import ImageHandler from "../../ImageHandler";

type Items = {
    category: string,
    stamps: Stamp[]
}

type Stamp = {
    src: string,
    name: string,
    description: string,
}


export default function StampContainer({ stamp }: { stamp: Items }) {
    const { stamps } = stamp;

    const stampimages = stamps.map((images, index) => {
        return (
            <div className='flex items-center gap-2' key={`${images.name + index}`}>
                <ImageHandler image={{
                    src: images.src,
                    alt: images.name,
                    width: 20,
                    height: 20,
                    className: "w-20 h-20 object-cover",

                }} />
                <div>
                    <h1>{images.name}</h1>
                    <h1>{images.description}</h1>
                </div>
            </div>
        )
    })

    return (
        <div className='grid gap-2'  >
            <h2>{stamp.category}</h2>
            <div className='grid grid-cols-2 gap-5 '>
                {stampimages}
            </div>
        </div>
    )
}