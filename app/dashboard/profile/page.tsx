// Import components with useState dynamically
"use client"

import { useState } from 'react';
import Image from 'next/image';

import StampModalContent from '@/app/ui/Components/profile/StampModalContent';
import AddFriendsModalContent from '@/app/ui/Components/profile/AddFriendsModalContent';
import FriendsModalContent from '@/app/ui/Components/profile/FriendsModalContent';
import FriendContainer from '@/app/ui/Components/profile/FriendContainer';

export default function Page() {
  const [modalStamps, setModalStamps] = useState<boolean>(false);
  const [modalFriends, setModalFriends] = useState<boolean>(false);
  const [modalAddFriends, setModalAddFriends] = useState<boolean>(false);
  const images = [
    { src: "/flower-stamp.svg" },
    { src: "/banana-stamp.svg" },
    { src: "/bear-stamp.svg" },
    { src: "/hotdog-stamp.svg" },
  ];

  let stampImages = images.map((image, index) => {
    return <Image width={20} height={20} key={index} className="w-20 h-20 object-cover" src={`${image.src}`} alt="" />
  })

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
            {stampImages}
          </div>
        </div>
        <div>
          <div className="flex justify-between pt-6">
            <h1 className="text-black text-base font-bold">DINA VÄNNER</h1>
            <h6 className="text-black text-sm font-bold underline cursor-pointer" onClick={() => setModalFriends(true)}>
              SE ALLA
            </h6>
          </div>
          <div className='grid grid-cols-2 gap-2 pt-6'>
            <FriendContainer showStamps={false} />
          </div>
        </div>
      </div>
      {/* Stamp Modal */}

      <div className={`bg-red-200 fixed bottom-0 w-full transition-all left-0 ${modalTransformStamps} duration-300 rounded-t-2xl`}>
        <StampModalContent onClose={closeModalStamps} />
      </div>

      {/* Friends Modal */}
      <div className={`bg-blue-500 fixed bottom-0 w-full left-0 ${modalTransformFriends} duration-300 rounded-t-2xl`}>
        <FriendsModalContent onClose={closeModalFriends} openAddFriendsModal={openAddFriendsModal} />
      </div>

      {/* Add Friends Modal */}
      <div className={`bg-green-200 fixed bottom-0 w-full left-0 ${modalTransformAddFriends} duration-300 rounded-t-2xl`}>
        <AddFriendsModalContent onClose={closeModalAddFriends} />
      </div>
    </>
  );
};