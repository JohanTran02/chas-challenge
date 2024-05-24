// Import components with useState dynamically
"use client"
import dynamic from 'next/dynamic';


import React from 'react';
import Image from 'next/image';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const DynamicStampModalContent = dynamic(() => import('app/ui/Components/profile/StampModalContent'));
const DynamicFriendsModalContent = dynamic(() => import('app/ui/Components/profile/FriendsModalContent'));
const DynamicAddFriendsModalContent = dynamic(() => import('app/ui/Components/profile/AddFriendsModalContent'));

const Page: React.FC = () => {
  const [modalStamps, setModalStamps] = React.useState<boolean>(false);
  const [modalFriends, setModalFriends] = React.useState<boolean>(false);
  const [modalAddFriends, setModalAddFriends] = React.useState<boolean>(false);

  const modalTransformStamps = modalStamps ? "transition-all h-[80vh]" : "transition-all h-[0px]";
  const modalTransformFriends = modalFriends ? "transition-all h-[80vh]" : "transition-all h-[0px]";
  const modalTransformAddFriends = modalAddFriends ? "transition-all h-[80vh]" : "transition-all h-[0px]";

  const closeModalStamps = () => setModalStamps(false);
  const closeModalFriends = () => setModalFriends(false);
  const openAddFriendsModal = () => setModalAddFriends(true); 
  const closeModalAddFriends = () => setModalAddFriends(false);

  return (
    <>
      <div className="h-2/5 w-full pb-6 flex flex-col justify-end items-center">
        <Image width={20} height={20} className="w-20 h-20 object-cover" src="/profile-cat.svg" alt="" />
        <h1 className="text-white text-base font-bold pt-6">Användarnamn</h1>
        <div className="flex">
          <h6 className="text-white text-base font-bold mr-2">23 stamps</h6>
          <h6 className="text-white text-base font-bold">8 vänner</h6>
        </div>
      </div>
      <div className="bg-white w-full px-4 pt-6 pb-16 rounded-t-3xl">
        <div>
          <div className="flex justify-between">
            <h1 className="text-black text-base font-bold">DINA STAMPS</h1>
            <h6 className="text-black text-sm underline font-bold cursor-pointer" onClick={() => setModalStamps(true)}>
              SE ALLA
            </h6>
          </div>
          <div className="flex justify-evenly mt-4">
          <Image width={20} height={20} className="w-20 h-20 object-cover" src="/flower-stamp.svg" alt="" />
            <Image width={20} height={20} className="w-20 h-20 object-cover" src="/banana-stamp.svg" alt="" />
            <Image width={20} height={20} className="w-20 h-20 object-cover" src="/bear-stamp.svg" alt="" />
            <Image width={20} height={20} className="w-20 h-20 object-cover" src="/hotdog-stamp.svg" alt="" />
          </div>
        </div>
        <div>
          <div className="flex justify-between pt-6">
            <h1 className="text-black text-base font-bold">DINA VÄNNER</h1>
            <h6 className="text-black text-sm font-bold underline cursor-pointer" onClick={() => setModalFriends(true)}>
              SE ALLA
            </h6>
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
      </div>
          {/* Stamp Modal */}
          <div className={`bg-red-200 fixed bottom-0 w-full transition-all left-0 ${modalTransformStamps} duration-300 rounded-t-2xl`}>
        {modalStamps && <DynamicStampModalContent onClose={closeModalStamps} />}
      </div>

      {/* Friends Modal */}
      <div className={`bg-blue-500 fixed bottom-0 w-full left-0 ${modalTransformFriends} duration-300 rounded-t-2xl`}>
        {modalFriends && <DynamicFriendsModalContent onClose={closeModalFriends} openAddFriendsModal={openAddFriendsModal} />}
      </div>

      {/* Add Friends Modal */}
      <div className={`bg-green-200 fixed bottom-0 w-full left-0 ${modalTransformAddFriends} duration-300 rounded-t-2xl`}>
        {modalAddFriends && <DynamicAddFriendsModalContent onClose={closeModalAddFriends} />}
      </div>
    </>
  );
};

export default Page;