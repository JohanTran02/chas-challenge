import ImageHandler from "../../ImageHandler";

export default function StampContainer({ stamp }: { stamp: string }) {
    return (
        <>
        <div key={stamp}> 
               <ImageHandler image={{
                src: `${stamp.toLowerCase()}.svg`,
                // src: `${"banana".toLowerCase()}.svg`,
                alt: stamp.toLowerCase(),
                width: 120,
                height: 120,
                className: "size-30 object-cover",
                

            }} />
        </div>
         
        </>
    )
}