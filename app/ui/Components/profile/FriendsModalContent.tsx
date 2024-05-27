import React from 'react';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import FriendContainer from './FriendContainer';

export default function FriendsModalContent({ onClose, openAddFriendsModal }: { onClose: () => void, openAddFriendsModal: () => void }) {

  return (
    <div className="w-full relative">
      <XMarkIcon className="absolute top-1 right-1 w-8 cursor-pointer" onClick={onClose} />
      <div className='flex flex-col gap-5 p-4 h-[70vh]'>
        <h1>Dina Vänner</h1>
        <div className='grid gap-4 overflow-scroll no-scrollbar'>
          <div className='grid gap-2'>
            <h2>VÄNNER</h2>
            <div className="pt-2 relative mx-auto text-gray-600">
              <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Sök bland vänner"></input>
            </div>
            <div className='flex flex-col mt-6 gap-6 pl-2'>
              <FriendContainer showStamps={true} />
            </div>
          </div>
        </div>
      </div>
      <MagnifyingGlassIcon className='absolute bottom-8 right-1 w-8 cursor-pointer' onClick={openAddFriendsModal} />
    </div>

  );
};
