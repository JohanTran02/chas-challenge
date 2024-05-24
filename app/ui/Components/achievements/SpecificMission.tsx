'use client'

import Image from 'next/image'
import svg from '@/public/dollar.svg'

const SpecificMission = () => {
  const openModal = (): void => {
    const information = document.getElementById('missionsModal') as HTMLDialogElement; 
    information.showModal();
  }

  const closeModal = (): void => {
    const information = document.getElementById('missionsModal') as HTMLDialogElement; 
    information.close();
  }
  return (
    <>
      <div
        onClick={openModal} 
        className="bg-neturalWhite flex justify-between h-[125px] border-2 border-darkGreen p-2 rounded-xl">
        <div className="space-y-3 w-4/6 h-max font-bold">
          <p className="text-sm">Uppdrag</p>
          <p className="text-darkGreen text-xl">IGELKOTT</p>
          <div className="flex mb-2">
            <div className="flex-1 border-r-[1px] border-gray-400 flex flex-col items-center gap-1">
              <Image src='/dollar.svg' height={35} width={35} alt='' className='size-4'/>
              <p className='text-[12px] text-darkGreen'>GULD</p>
            </div>
            <div className="flex-1 border-r-[1px] border-gray-400 flex flex-col items-center gap-1">
              <Image src='/Percentage.svg' height={35} width={35} alt='' className='size-4'/>
              <p className='text-[12px] text-darkGreen'>GULD</p>
            </div>
            <div className="flex-1  flex flex-col items-center gap-1">
              <Image src='/map-mission.svg' height={35} width={35} alt='' className='size-4'/>
              <p className='text-[12px] text-darkGreen'>GULD</p>
            </div>
          </div>
        </div>
        <div className="bg-green-800 size-24 rounded-full self-center" />
      </div>

      <dialog 
        id="missionsModal"
        className="bg-neutralWhite h-4/6 w-5/6 max-w-[500px] max-h-[600px] m-auto relative rounded-3xl border-darkGreen border-2 overflow-y-hidden"
        >
        <div className="absolute bg-white inset-0 h-full translate-y-[20%] rounded-3xl z-[-1]"></div>
        <div className="flex flex-col w-full h-full px-4 pb-12 pt-2">
          <button 
            aria-label='Close button'
            onClick={closeModal}
            className="absolute right-0 top-0 my-6 mx-6 font-bold text-2xl text-darkGreen">
              <Image src='/close-button.svg' width={35} height={35} className='size-4' alt='close-button' />
            </button>
          <div className="w-full mt-10 space-y-6">
            <div className="bg-green-800 size-32 rounded-full self-center mx-auto" />
            <h1 className='font-bold text-black text-center'>Uppdrag: IGELKOTT</h1>  
            <div className="flex font-extrabold">
              <div className="flex-1 border-r-[1px] border-gray-400 flex flex-col items-center gap-1">
                <Image src='/dollar.svg' height={35} width={35} alt='' className='size-4'/>
                <p className='text-[12px] text-darkGreen'>GULD</p>
              </div>
              <div className="flex-1 border-r-[1px] border-gray-400 flex flex-col items-center gap-1">
                <Image src='/Percentage.svg' height={35} width={35} alt='' className='size-4'/>
                <p className='text-[12px] text-darkGreen'>GULD</p>
              </div>
              <div className="flex-1  flex flex-col items-center gap-1">
                <Image src='/map-mission.svg' height={35} width={35} alt='' className='size-4'/>
                <p className='text-[12px] text-darkGreen'>GULD</p>
              </div>
            </div>
            <div className="flex gap-3 h-[120px]">
              <div className="w-32 border-2 border-black p-2 h-full line-clamp-4 text-[13px]">
                Ai-genererad bild på objektet man ska fota som hjälp
              </div>
              <article className='flex-1 space-y-2 h-full '>
                <h2 className='font-bold'>Beskrivning:</h2>
                <p className='text-[12px] line-clamp-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique excepturi praesentium expedita quae perspiciatis.</p>
              </article>
            </div>

            <div className="w-full h-[75px] flex justify-center items-end pb-[10px]">
              <button className='py-3 px-8 size-max bg-darkGreen text-[12px] text-white font-bold rounded-full'>Starta uppdrag
              </button>
            </div>
          
          </div>
        </div>
      </dialog>
    </>
  )
}

export default SpecificMission;
