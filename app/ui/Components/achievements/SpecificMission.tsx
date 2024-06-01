'use client'

import { Stampinfo } from '@/app/lib/definitions';
import Image from 'next/image'
import Dialog from './Dialog';
import { useState } from 'react';
import Camera from '../../camera/Camera';

type Prop = { prop: Stampinfo; completedStamps?: string | undefined}

const SpecificMission = ({ prop, completedStamps }: Prop) => {
  const [openCamera, setOpenCamera] = useState(false);

  const handleModal = () => {
    if (!openCamera) {
      const information = document.getElementById(`missionsModal-${prop.name}`) as HTMLDialogElement;
      information.close();
    }
    else {
      const information = document.getElementById(`missionsModal-${prop.name}`) as HTMLDialogElement;
      information.showModal();
    }
    setOpenCamera((prev) => !prev)
  }

  const openModal = (): void => {
    document.body.style.overflowY = 'hidden';
    const information = document.getElementById(`missionsModal-${prop.name}`) as HTMLDialogElement;
    information.showModal();
  }

  const stampState = () => {
    if(completedStamps){
      const completedStamp: string = completedStamps;
      // console.log(completedStamp)
      return `/Images/${completedStamp}.svg`
    }

    // console.log(prop.name)
    if(prop.name){
      const name = prop.name;
      if(name === 'Orange' || name === 'Apple') return `/Images/stamps/placeholder-bronze.svg`
      if(name === 'Banana') return `/Images/stamps/placeholder-silver.svg`
      if(name === 'Pear' || name === 'Clementine') return `/Images/stamps/placeholder-guld.svg` 
    }
  } 

  const rarity = stampState() as string; 
  return (
    <>
      {openCamera && <Camera handleModal={handleModal} />}
      <div
        onClick={openModal}
        className="bg-neturalWhite flex justify-between h-[135px] border-2 border-darkGreen py-2 px-3 rounded-xl">
        <div className="space-y-3 w-4/6 h-max font-bold">
          <p className="text-sm">Uppdrag</p>
          <p className="text-darkGreen text-xl uppercase">{prop.name}</p>
          <div className="flex mb-2">
            <div className="flex-1 border-r-[1px] border-gray-400 flex flex-col items-center gap-1">
              <Image src='/Images/dollar.svg' height={35} width={35} alt='' className='size-4' />
              <p className='text-[12px] text-darkGreen'>{prop.rarity}</p>
            </div>
            <div className="flex-1 border-r-[1px] border-gray-400 flex flex-col items-center gap-1">
              <Image src='/Images/Percentage.svg' height={35} width={35} alt='' className='size-4' />
              <p className='text-[12px] text-darkGreen'>0,5</p>
            </div>
            <div className="flex-1  flex flex-col items-center gap-1">
              <Image src='/Images/map-mission.svg' height={35} width={35} alt='' className='size-4' />
              <p className='text-[12px] text-darkGreen'>{prop.latitude ? 'PLATS' : 'OKÄND'}</p>
            </div>
          </div>
        </div>
        <div className="size-18 self-center" >
          <Image src={rarity} height={100} width={100} alt='' className='' />
        </div>
      </div>
      <Dialog prop={prop} handleModal={handleModal} />
    </>
  )
}

export default SpecificMission;
