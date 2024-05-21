"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';
import MissionsCategory from '@/app/ui/Components/achievements/MissonsCategory'

/* import styles from '@/app/ui/style/profile/profile.module.css'; */

const Page = () => {
  const [modal, setModal] = useState<boolean>(false)

  const modalTransform = modal ? "transition-all h-full" : "transition-all h-[0px]";

  return (
    <>
      <div className=" h-2/5 w-full pb-6 flex flex-col justify-end items-center ">
        <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-cat.svg" alt="" />
        <h1 className="text-white text-base font-bold pt-6">Användarnamn</h1>
        <div className="flex">
          <h6 className="text-white text-base font-bold mr-2">23 stamps</h6>
          <h6 className="text-white text-base font-bold">8 vänner</h6>
        </div>

      </div>
      <div className="bg-white h-3/5 w-full px-4 pt-6 pb-16 rounded-t-3xl">
        <div>
          <div className='flex justify-between'>
            <h1 className="text-black text-base font-bold ">DINA STAMPS</h1>
            <h6 className='text-black text-sm underline font-bold cursor-pointer' onClick={() => setModal(true)}>SE ALLA</h6>
          </div>

          <div className='flex justify-evenly mt-4'>
            <Image width={20} height={20} className="w-20 h-20 object-cover" src="/flower-stamp.svg" alt="" />
            <Image width={20} height={20} className="w-20 h-20 object-cover" src="/banana-stamp.svg" alt="" />
            <Image width={20} height={20} className="w-20 h-20 object-cover" src="/bear-stamp.svg" alt="" />
            <Image width={20} height={20} className="w-20 h-20 object-cover" src="/hotdog-stamp.svg" alt="" />
          </div>
        </div>
        <div>
          <div className='flex justify-between pt-6'>
            <h1 className="text-black text-base font-bold ">DINA VÄNNER</h1>
            <h6 className='text-black text-sm font-bold underline'>SE ALLA</h6>
          </div>
          <div className='flex justify-evenly pt-6 items-center  '>
            <div >
              <div className='flex items-center justify-between'>
                <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-dog.svg" alt="" />
                <h6 className='pl-4'> Polare</h6>
              </div>
              <div className='flex items-center justify-between pt-4'>
                <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-beaver.svg" alt="" />
                <h6 className='pl-4'> Homie</h6>
              </div>
            </div>
            <div>
              <div className='flex items-center justify-between'>
                <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-dog2.svg" alt="" />
                <h6 className='pl-4'> Kompis</h6>
              </div>
              <div className='flex items-center pt-4'>
                <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-cat.svg" alt="" />
                <h6 className='pl-4'> Bror</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={` bg-red-200 fixed h-[80vh] bottom-0 w-full left-0 ${modalTransform} duration-300 rounded-t-2xl`}>
          <div className={`w-full h-full relative`}>
            <XMarkIcon className='absolute top-0 right-0 w-8 cursor-pointer' onClick={() => setModal(false)} />
            <h1>Dina Stamps</h1>
          </div>
        </div >
      </div >

    </>
  );
};

export default Page;