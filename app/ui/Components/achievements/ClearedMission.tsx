import Image from "next/image"

export default function ClearedMission() {
    return (
        <div
            id="missionsModal"
            className="bg-darkGreen w-5/6 max-w-[500px] h-[600px] m-auto relative rounded-3xl border-darkGreen border-2 overflow-scroll no-scrollbar">
            <div>
                <Image
                    src={"/Images/Pressbyran.svg"}
                    height={128}
                    width={128}
                    alt=''
                    className="m-auto translate-y-[4  0%] relative z-10"
                />
                <div className="relative bg-white inset-0 h-full rounded-3xl ">
                    <div className="w-full h-full px-4 pb-12 pt-10">
                        <div className="w-full mt-10 space-y-6">
                            <h1 className='font-bold text-darkGreen text-center text-3xl'>GRATTIS!</h1>
                            <h1 className='font-bold text-black text-center'>Du har hittat en STAMPTITEL</h1>
                            <div className="flex font-extrabold">
                                <div className="flex-1 border-r-[1px] border-gray-400 flex flex-col items-center gap-1">
                                    <Image src='/dollar.svg' height={35} width={35} alt='' className='size-4' />
                                    <p className='text-[12px] text-darkGreen'>GULD</p>
                                </div>
                                <div className="flex-1 border-r-[1px] border-gray-400 flex flex-col items-center gap-1">
                                    <Image src='/Percentage.svg' height={35} width={35} alt='' className='size-4' />
                                    <p className='text-[12px] text-darkGreen'>0,5</p>
                                </div>
                                <div className="flex-1  flex flex-col items-center gap-1">
                                    <Image src='/map-mission.svg' height={35} width={35} alt='' className='size-4' />
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
                            <div className="w-full flex justify-center">
                                <button
                                    className='py-3 px-8 size-max bg-darkGreen text-[12px] text-white font-bold rounded-full'>
                                    Stäng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}