import ImageHandler from "../../ImageHandler";
import Mapbox from "../dashboard/map/Mapbox"
import { Stampinfo } from "@/app/lib/definitions"
import StampStats from "./StampStats";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RootState } from "@/app/lib/redux/store";
import { useSelector } from "react-redux";

type Prop = {
    stamp: Stampinfo;
    closeModal: (setModal: Dispatch<SetStateAction<Boolean>>) => void;
    setModal: Dispatch<SetStateAction<Boolean>>;
    unlockedImg: string | null;
}

export default function CompletedMission({ stamp, closeModal, setModal, unlockedImg }: Prop) {
    const { stamps, collectedStampsWithCoords } = useSelector((state: RootState) => state.stamp);
    const [coords, setCoords] = useState<{ latitude: string; longitude: string }>()

    useEffect(() => {
        console.log(collectedStampsWithCoords)
        collectedStampsWithCoords.filter((obj) => {
            if (obj.name === stamp.name) {
                const coords = obj.coordinates.map((coord) => coord.replace(/[^\d.]/g, ''))
                setCoords({ latitude: coords[0], longitude: coords[1] });
                return true;
            }
            return;
        })

    }, [collectedStampsWithCoords, stamp.name])

    const { name, facts, latitude, longitude } = stamp;
    const styleProp = { height: '290px', width: '400px', inset: '0 0 0 0', translate: '-60px -90px' };
    return (
        <div className="h-full w-full bg-darkGreen relative">
            <ImageHandler image={{
                src: "Stjärnavituppdrag.svg",
                alt: "star",
                width: 40,
                height: 40,
                className: 'size-12 absolute top-[28px] left-[65px]',
                // checkPath: true
            }} />
            <ImageHandler image={{
                src: "Stjärnauppdrag.svg",
                alt: "star",
                width: 40,
                height: 40,
                className: 'size-12 absolute top-[155px] right-16',
                // checkPath: true
            }} />

            <ImageHandler image={
                {
                    src: `${stamp.name.toLowerCase()}.svg`,
                    height: 128,
                    width: 128,
                    alt: '',
                    className: "m-auto translate-y-[40%] relative z-10"
                }
            } />
            <div className="bg-white inset-0 rounded-3xl w-full h-full pb-6 px-4">
                <div className="w-full pt-[85px] space-y-6">
                    <h1 className='font-bold text-darkGreen text-center text-2xl uppercase'>grattis!</h1>
                    <h2 className='font-bold text-black text-center'>Du har hittat en <span className="uppercase">{stamp.name}</span></h2>
                    <div className="flex font-extrabold">
                        <StampStats stamp={stamp} />
                    </div>
                    <div>
                        {unlockedImg && <ImageHandler image={
                            {
                                checkPath: true,
                                src: unlockedImg,
                                height: 128,
                                width: 128,
                                alt: 'Stamp picture',
                                className: "object-cover w-full h-[128px] object-center"
                            }
                        } />}

                    </div>

                    <div >
                        <h1 className="font-bold mb-3 uppercase">Information</h1>
                        <article className='p-3 h-full text-sm border-2 border-darkGreen rounded-lg'>{stamp.facts}</article>
                    </div>
                    <div className="relative h-[128px] w-full overflow-hidden rounded-xl">
                        <Mapbox
                            styleProp={styleProp}
                            longitude={coords?.longitude ? coords.longitude : longitude}
                            latitude={coords?.latitude ? coords.latitude : latitude}
                            interactive={false}
                            navcontrol={false}
                            geocontrol={false}
                            facts={facts}
                            name={name}
                            trackResize={false}
                            minimap={true}
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <button
                            onClick={() => closeModal(setModal)}
                            className=' bg-darkGreen py-[10px] px-[30px] text-base text-white font-bold rounded-full'>
                            Stäng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}