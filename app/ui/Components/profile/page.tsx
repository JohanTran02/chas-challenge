/* Gamla page  */
"use client"
/* import React, { useState } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';
import MissionsCategory from '@/app/ui/Components/achievements/MissonsCategory';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'; */

/* import styles from '@/app/ui/style/profile/profile.module.css'; */

const Page = () => {
  const [modalStamps, setModalStamps] = useState<boolean>(false);
  const [modalFriends, setModalFriends] = useState<boolean>(false);
  const [modalAddFriends, setModalAddFriends] = useState<boolean>(false);

  const modalTransformStamps = modalStamps ? "transition-all h-[80vh]" : "transition-all h-[0px]";
  const modalTransformFriends = modalFriends ? "transition-all h-[80vh]" : "transition-all h-[0px]";
  const modalTransformAddFriends = modalAddFriends ? "transition-all h-[80vh]" : "transition-all h-[0px]";

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
      <div className="bg-white w-full px-4 pt-6 pb-16 rounded-t-3xl">
        <div>
          <div className='flex justify-between'>
            <h1 className="text-black text-base font-bold ">DINA STAMPS</h1>
            <h6 className='text-black text-sm underline font-bold cursor-pointer' onClick={() => setModalStamps(true)}>SE ALLA</h6>
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
            <h6 className='text-black text-sm font-bold underline cursor-pointer' onClick={() => setModalFriends(true)}>SE ALLA</h6>
          </div>
          <div className='flex justify-evenly pt-6 items-center'>
            <div>
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

       
        <div className={`bg-red-200 fixed bottom-0 w-full left-0 ${modalTransformStamps} duration-300 rounded-t-2xl`}>
          <div className={`w-full relative`}>
            <XMarkIcon className='absolute top-1 right-1 w-8 cursor-pointer' onClick={() => setModalStamps(false)} />
            <div className='flex flex-col gap-5 p-4 h-[80vh]'>
              <h1>Dina Stamps</h1>
              <div className='grid gap-4 overflow-scroll no-scrollbar'>
                <div className='grid gap-2'>
                  <h2>KATEGORI</h2>
                  <div className='grid grid-cols-2 gap-5'>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-cat.svg" alt="" />
                      <div>
                        <h1>Namn</h1>
                        <h1>Förklaring</h1>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-cat.svg" alt="" />
                      <div>
                        <h1>Namn</h1>
                        <h1>Förklaring</h1>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-cat.svg" alt="" />
                      <div>
                        <h1>Namn</h1>
                        <h1>Förklaring</h1>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-cat.svg" alt="" />
                      <div>
                        <h1>Namn</h1>
                        <h1>Förklaring</h1>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-cat.svg" alt="" />
                      <div>
                        <h1>Namn</h1>
                        <h1>Förklaring</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid gap-2'>
                  <h2>KATEGORI</h2>
                  <div className='grid grid-cols-2 gap-5'>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-cat.svg" alt="" />
                      <div>
                        <h1>Namn</h1>
                        <h1>Förklaring</h1>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-cat.svg" alt="" />
                      <div>
                        <h1>Namn</h1>
                        <h1>Förklaring</h1>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-cat.svg" alt="" />
                      <div>
                        <h1>Namn</h1>
                        <h1>Förklaring</h1>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-cat.svg" alt="" />
                      <div>
                        <h1>Namn</h1>
                        <h1>Förklaring</h1>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-cat.svg" alt="" />
                      <div>
                        <h1>Namn</h1>
                        <h1>Förklaring</h1>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className={`bg-blue-500 fixed bottom-0 w-full left-0 ${modalTransformFriends} duration-300 rounded-t-2xl`}>
          <div className={`w-full relative`}>
            <XMarkIcon className='absolute top-1 right-1 w-8 cursor-pointer' onClick={() => setModalFriends(false)} />
            <div className='flex flex-col gap-5 p-4 h-[80vh]'>
              <h1>Dina Vänner</h1>
              <div className='grid gap-4 overflow-scroll no-scrollbar'>
                <div className='grid gap-2'>
                  <h2>VÄNNER</h2>
                  <div className="pt-2 relative mx-auto text-gray-600">
                  <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Sök bland vänner"></input>
                  </div>
                  <div className='flex flex-col mt-6 gap-6 pl-2'>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-16 h-16 object-cover" src="/profile-dog.svg" alt="" />
                      <div>
                        <h1>Användare</h1>
                        <h3> 42 stamps</h3>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-16 h-16 object-cover" src="/profile-cat.svg" alt="" />
                      <div>
                        <h1>Användare</h1>
                        <h3> 42 stamps</h3>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-16 h-16 object-cover" src="/profile-dog2.svg" alt="" />
                      <div>
                        <h1>Användare</h1>
                        <h3> 42 stamps</h3>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-16 h-16 object-cover" src="/profile-beaver.svg" alt="" />
                      <div>
                        <h1>Användare</h1>
                        <h3> 42 stamps</h3>
                      </div>
                    </div>
                    <div className='flex justify-end'>
                      <MagnifyingGlassIcon className='w-8 cursor-pointer'  onClick={() => setModalAddFriends(true)}/>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className={`bg-green-200 fixed bottom-0 w-full left-0 ${modalTransformAddFriends} duration-300 rounded-t-2xl`}>
          <div className={`w-full relative`}>
            <XMarkIcon className='absolute top-1 right-1 w-8 cursor-pointer' onClick={() => setModalAddFriends(false)} />
            <div className='flex flex-col gap-5 p-4 h-[80vh]'>
             
              <div className='grid gap-4 overflow-scroll no-scrollbar'>
                <div className='grid gap-2'>
                  <h2>Användare</h2>
                  
                  <div className="pt-6 pb-8 mx-auto text-gray-600">
                  <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Sök bland användare"></input>
                  </div>

                  <div className='flex flex-col mt-auto gap-6 pl-2'>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-16 h-16 object-cover" src="/profile-dog.svg" alt="" />
                      <div>
                        <h1>Användare</h1>
                        <h3> 42 stamps</h3>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-16 h-16 object-cover" src="/profile-cat.svg" alt="" />
                      <div>
                        <h1>Användare</h1>
                        <h3> 42 stamps</h3>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-16 h-16 object-cover" src="/profile-dog2.svg" alt="" />
                      <div>
                        <h1>Användare</h1>
                        <h3> 42 stamps</h3>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image width={20} height={20} className="w-16 h-16 object-cover" src="/profile-beaver.svg" alt="" />
                      <div>
                        <h1>Användare</h1>
                        <h3> 42 stamps</h3>
                      </div>
                    </div>
                  
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Page;
