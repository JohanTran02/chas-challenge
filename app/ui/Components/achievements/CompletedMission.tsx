import Image from "next/image"
import Mapbox from "../dashboard/map/Mapbox"
import { Stampinfo } from "@/app/lib/definitions"

export default function CompletedMission({ prop, closeModal }: { prop: Stampinfo, closeModal: () => void }) {
    const { name, facts, latitude, longitude } = prop;
    const styleProp = { height: '215px', width: '400px', inset: '0 0 0 0', translate: '-60px -90px'};
    return (<>
        <Image
            src={"/Images/Pressbyran.svg"}
            height={128}
            width={128}
            alt=''
            className="m-auto translate-y-[40%] relative z-10"
        />
        <div className="bg-white inset-0 rounded-3xl w-full h-full pb-6 px-4">
            <div className="w-full mt-10 space-y-6">
                <h1 className='font-bold text-darkGreen text-center text-3xl'>GRATTIS!</h1>
                <h2 className='font-bold text-black text-center'>Du har hittat en STAMPTITEL</h2>
                <div className="flex font-extrabold">
                    <div className="flex-1 border-r-[1px] border-gray-400 flex flex-col items-center gap-1">
                        <Image src='/chas-challenge/Images/dollar.svg' height={35} width={35} alt='' className='size-4' />
                        <p className='text-[12px] text-darkGreen'>GULD</p>
                    </div>
                    <div className="flex-1 border-r-[1px] border-gray-400 flex flex-col items-center gap-1">
                        <Image src='/chas-challenge/Images/Percentage.svg' height={35} width={35} alt='' className='size-4' />
                        <p className='text-[12px] text-darkGreen'>0,5</p>
                    </div>
                    <div className="flex-1  flex flex-col items-center gap-1">
                        <Image src='/chas-challenge/Images/map-mission.svg' height={35} width={35} alt='' className='size-4' />
                        <p className='text-[12px] text-darkGreen'>PLATS</p>
                    </div>
                </div>
                <div>
                    <Image
                        src={"https://images.unsplash.com/photo-1624976172336-54d765427b6b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"}
                        width={0}
                        height={0}
                        alt=""
                        className="object-cover w-full h-[128px] object-center"
                    />
                </div>
                
                <div >
                    <h1 className="font-bold mb-3">Information</h1>
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
                        onClick={closeModal}
                        className=' bg-darkGreen py-[10px] px-[30px] text-base text-white font-bold rounded-full'>
                        Stäng
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}