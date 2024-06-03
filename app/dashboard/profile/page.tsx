// Import components with useState dynamically
"use client"

import { useState } from 'react';

import StampModalContent from '@/app/ui/Components/profile/StampModalContent';
import AddFriendsModalContent from '@/app/ui/Components/profile/AddFriendsModalContent';
import FriendsModalContent from '@/app/ui/Components/profile/FriendsModalContent';
import FriendContainer from '@/app/ui/Components/profile/FriendContainer';
import ImageHandler from '@/app/ui/ImageHandler';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/lib/redux/store';

export default function Page() {
  const [modalStamps, setModalStamps] = useState<boolean>(false);
  const [modalFriends, setModalFriends] = useState<boolean>(false);
  const [modalAddFriends, setModalAddFriends] = useState<boolean>(false);
  const { collectedStamps } = useSelector((state: RootState) => state.stamp);

  let stampImages = collectedStamps.map((stamp, index) => {
    if (index < 3) {
      return (
        <ImageHandler image={{
          src: `${stamp.toLowerCase()}.svg`,
          alt: stamp,
          width: 100,
          height: 100,
          className: "size-24 object-cover"
        }} key={stamp} />
      )
    }

    return null;
  })

  const modalTransformStamps = modalStamps ? "transition-all h-[80vh]" : "transition-all h-[0px]";
  const modalTransformFriends = modalFriends ? "transition-all h-[80vh]" : "transition-all h-[0px]";
  const modalTransformAddFriends = modalAddFriends ? "transition-all h-[80vh]" : "transition-all h-[0px]";

  const closeModalStamps = () => setModalStamps(false);
  const closeModalFriends = () => setModalFriends(false);
  const openAddFriendsModal = () => setModalAddFriends(true);
  const closeModalAddFriends = () => setModalAddFriends(false);

  // style={{ height: 'calc(100vh - 310px)' }}
  return (
    <>
      <div className="w-full flex flex-col justify-end items-center py-6 space-y-2">
        <div className=''>
          <ImageHandler image={{
            src: "profile-cat.svg",
            alt: "",
            width: 100,
            height: 100,
            className: "size-24 object-cover border-4 border-white rounded-full"
          }} />
        </div>

        <div className='text-center space-y-1'>
          <h1 className="text-white text-xl font-bold mx-auto uppercase">Användarnamn</h1>
          <h2 className="text-white text-sm font-bold">23 stamps<span className='px-2'>&#x2022;</span>4 vänner</h2>
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
          <div className='grid grid-cols-2 gap-2 pt-6 '>
            <FriendContainer showStamps />
          </div>
        </div>
      </div>
      {/* Stamp Modal */}

      <div className={`bg-neutral-100 fixed bottom-0 w-full transition-all left-0 ${modalTransformStamps} duration-300 rounded-t-2xl`}>
        <StampModalContent onClose={closeModalStamps} />
      </div>

      {/* Friends Modal */}
      <div className={`bg-neutral-100 fixed bottom-0 w-full left-0 ${modalTransformFriends} duration-300 rounded-t-2xl`}>
        <FriendsModalContent onClose={closeModalFriends} openAddFriendsModal={openAddFriendsModal} />
      </div>

      {/* Add Friends Modal */}
      <div className={`bg-neutral-100 fixed bottom-0 w-full left-0 ${modalTransformAddFriends} duration-300 rounded-t-2xl`}>
        <AddFriendsModalContent onClose={closeModalAddFriends} modalAddFriends={modalAddFriends} />
      </div>
    </>
  );
};