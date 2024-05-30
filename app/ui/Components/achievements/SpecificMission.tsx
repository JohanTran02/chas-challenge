'use client'

import { Stampinfo } from '@/app/lib/definitions';
import Image from 'next/image'
import Dialog from './Dialog';
import { useState } from 'react';
import Camera from '../../camera/Camera';

const SpecificMission = ({ prop }: { prop: Stampinfo }) => {
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
    const information = document.getElementById(`missionsModal-${prop.name}`) as HTMLDialogElement;
    information.showModal();
  }

  return (
    <>
      {openCamera && <Camera handleModal={handleModal} />}
      <div
        onClick={openModal}
        className="bg-neturalWhite flex justify-between h-[125px] border-2 border-darkGreen p-2 rounded-xl">
        <div className="space-y-3 w-4/6 h-max font-bold">
          <p className="text-sm">Uppdrag</p>
          <p className="text-darkGreen text-xl">{prop.name}</p>
          <div className="flex mb-2">
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
        </div>
        <div className="bg-green-800 size-24 rounded-full self-center" />
      </div>
      <Dialog prop={prop} handleModal={handleModal} />
    </>
  )
}

export default SpecificMission;
