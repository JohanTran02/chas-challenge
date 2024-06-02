import ImageHandler from "../../ImageHandler";
import Mapbox from "../dashboard/map/Mapbox"
import { Stampinfo } from "@/app/lib/definitions"
import StampStats from "./StampStats";
import { Dispatch, SetStateAction } from "react";

type Prop = { 
    prop: Stampinfo; 
    closeModal: (setModal: Dispatch<SetStateAction<Boolean>>) => void; 
    setModal: Dispatch<SetStateAction<Boolean>>; 
}

export default function CompletedMission({ prop, closeModal, setModal }: Prop) {
    const { name, facts, latitude, longitude } = prop;
    const styleProp = { height: '290px', width: '400px', inset: '0 0 0 0', translate: '-60px -90px' };
    return (<>
        <ImageHandler image={
            {
                src: "Pressbyran.svg",
                height: 128,
                width: 128,
                alt: '',
                className: "m-auto translate-y-[40%] relative z-10"
            }
        } />
        <div className="bg-white inset-0 rounded-3xl w-full h-full pb-6 px-4">
            <div className="w-full pt-16 space-y-6">
                <h1 className='font-bold text-darkGreen text-center text-3xl uppercase'>grattis!</h1>
                <h2 className='font-bold text-black text-center'>Du har hittat en STAMPTITEL</h2>
                <div className="flex font-extrabold">
                    <StampStats />
                </div>
                <div>
                    <ImageHandler image={
                        {
                            src: "Pressbyran.svg",
                            height: 128,
                            width: 128,
                            alt: '',
                            className: "object-cover w-full h-[128px] object-center"
                        }
                    } />

                </div>

                <div >
                    <h1 className="font-bold mb-3 uppercase">Information</h1>
                    <article className='p-3 h-full text-sm border-2 border-darkGreen rounded-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi aut voluptatum ipsam id iusto maiores, rem beatae illum ad laudantium!</article>
                </div>
                <div className="relative h-[128px] w-full overflow-hidden rounded-xl">
                    <Mapbox
                        styleProp={styleProp}
                        longitude={longitude}
                        latitude={latitude}
                        interactive={false}
                        navcontrol={false}
                        geocontrol={false}
                        facts={facts}
                        name={name}
                        trackResize={false}
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
    </>
    )
}