import infoIcon from '@/public/information.svg';
import vector from '@/public/wireframe-content-vector.svg'
import Image from 'next/image'

export default function Page() {
    return (
        <div 
            className="flex flex-col justify-between gap-20 h-full max-w-[600px] mx-auto pt-14 px-4">
           <div className="w-full h-20 flex justify-between">
                <div className="py-[15px] px-2 border-2 border-black grid place-items-center text-xl font-semibold">
                    <p>LOGGA </p>
                </div>
                <Image
                    className='rounded-full'
                    src={infoIcon} 
                    alt='Information button' 
                    height={41} width={41}
                />
            </div> 

            <div className="flex-1 h-full mb-2 overflow-y-auto no-scrollbar">
                <div className="flex w-full h-36 border-black border-2 mb-4 p-[8px] rounded-md">
                    <div className="h-full flex-grow flex-shrink-0">
                        <div className="flex gap-8 items-center w-[140px] h-[49px]">
                            <div className="h-[45px] w-[45px] rounded-full border-black border-4" />
                            <p className='font-bold text-lg'>Xxxx</p>
                        </div>
                        <div className=""> 
                            <div className="w-5/6 h-[7px] rounded-md bg-[#D9D9D9] my-4"/>
                            <div className="w-5/6 h-[7px] rounded-md bg-[#D9D9D9]"/>
                        </div>
                        <div className="fw-full h-max font-semibold mt-2">
                            <p className=" inline-block">Gilla</p>
                            <p className=" inline-block w-max ml-8">Kommentera</p>
                        </div>
                    </div>
                    <div className="flex-1 h-full py-2">
                        <Image src={vector} alt='Vector' width={100} height={100}/>
                    </div>
                </div>
                <div className="flex w-full h-36 border-black border-2 mb-4 p-[8px] rounded-md">
                    <div className="h-full flex-grow flex-shrink-0">
                        <div className="flex gap-8 items-center w-[140px] h-[49px]">
                            <div className="h-[45px] w-[45px] rounded-full border-black border-4" />
                            <p className='font-bold text-lg'>Xxxx</p>
                        </div>
                        <div className=""> 
                            <div className="w-5/6 h-[7px] rounded-md bg-[#D9D9D9] my-4"/>
                            <div className="w-5/6 h-[7px] rounded-md bg-[#D9D9D9]"/>
                        </div>
                        <div className="fw-full h-max font-semibold mt-2">
                            <p className=" inline-block">Gilla</p>
                            <p className=" inline-block w-max ml-8">Kommentera</p>
                        </div>
                    </div>
                    <div className="flex-1 h-full py-2">
                        <Image src={vector} alt='Vector' width={100} height={100}/>
                    </div>
                </div>
                <div className="flex w-full h-36 border-black border-2 mb-4 p-[8px] rounded-md">
                    <div className="h-full flex-grow flex-shrink-0">
                        <div className="flex gap-8 items-center w-[140px] h-[49px]">
                            <div className="h-[45px] w-[45px] rounded-full border-black border-4" />
                            <p className='font-bold text-lg'>Xxxx</p>
                        </div>
                        <div className=""> 
                            <div className="w-5/6 h-[7px] rounded-md bg-[#D9D9D9] my-4"/>
                            <div className="w-5/6 h-[7px] rounded-md bg-[#D9D9D9]"/>
                        </div>
                        <div className="fw-full h-max font-semibold mt-2">
                            <p className=" inline-block">Gilla</p>
                            <p className=" inline-block w-max ml-8">Kommentera</p>
                        </div>
                    </div>
                    <div className="flex-1 h-full py-2">
                        <Image src={vector} alt='Vector' width={100} height={100}/>
                    </div>
                </div>
                <div className="flex w-full h-36 border-black border-2 mb-4 p-[8px] rounded-md">
                    <div className="h-full flex-grow flex-shrink-0">
                        <div className="flex gap-8 items-center w-[140px] h-[49px]">
                            <div className="h-[45px] w-[45px] rounded-full border-black border-4" />
                            <p className='font-bold text-lg'>Xxxx</p>
                        </div>
                        <div className=""> 
                            <div className="w-5/6 h-[7px] rounded-md bg-[#D9D9D9] my-4"/>
                            <div className="w-5/6 h-[7px] bg-[#D9D9D9]"/>
                        </div>
                        <div className="fw-full h-max font-semibold mt-2">
                            <p className=" inline-block">Gilla</p>
                            <p className=" inline-block w-max ml-8">Kommentera</p>
                        </div>
                    </div>
                    <div className="flex-1 h-full py-2">
                        <Image src={vector} alt='Vector' width={100} height={100}/>
                    </div>
                </div>
            </div> 
        </div>
    )
}
