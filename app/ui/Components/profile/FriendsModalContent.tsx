import React from 'react';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface FriendsModalContentProps {
  onClose: () => void;
  openAddFriendsModal: () => void; // Function to open the Add Friends modal
}

const FriendsModalContent: React.FC<FriendsModalContentProps> = ({ onClose, openAddFriendsModal}) => {
  return (
 
      <div className="w-full relative">
        <XMarkIcon className="absolute top-1 right-1 w-8 cursor-pointer" onClick={onClose} />
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
                      <MagnifyingGlassIcon className='w-8 cursor-pointer' onClick={openAddFriendsModal}/>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
      </div>
    
  );
};

export default FriendsModalContent;