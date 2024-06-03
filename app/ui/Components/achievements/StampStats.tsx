import { Stampinfo } from "@/app/lib/definitions";
import ImageHandler from "../../ImageHandler";

export default function StampStats({ prop, fakeRarity }: Partial<{ prop: Stampinfo, fakeRarity: string}>) {

    return (
        <>
            <div className="flex-1 border-r-[1px] border-gray-400 flex flex-col items-center gap-1">
                <ImageHandler image={{
                    src: "dollar.svg",
                    alt: "",
                    height: 14,
                    width: 14,
                    className: "size-4"
                }} />
                <p className='text-[12px] text-darkGreen capitalize'>{prop?.rarity ? prop.rarity : fakeRarity}</p>
            </div>
            <div className="flex-1 border-r-[1px] border-gray-400 flex flex-col items-center gap-1">
                <ImageHandler image={{
                    src: "Percentage.svg",
                    alt: "",
                    height: 14,
                    width: 14,
                    className: "size-4",
                }} />
                <p className='text-[12px] text-darkGreen'>0,5</p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-1">
                <ImageHandler image={{
                    src: "map-mission.svg",
                    alt: "",
                    height: 14,
                    width: 14,
                    className: "size-4"
                }} />
                <p className='text-[12px] text-darkGreen'>
                    {prop?.latitude ? 'PLATS' : 'OKÄND'}
                </p>
            </div>
        </>
    )
}