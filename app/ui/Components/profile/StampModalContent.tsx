import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface StampModalContentProps {
  onClose: () => void;
}


const StampModalContent: React.FC<StampModalContentProps> = ({ onClose }) => {
  return (
   
      <div className="w-full relative">
        <XMarkIcon className="absolute top-1 right-1 w-8 cursor-pointer" onClick={onClose} />
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
   
  );
};

export default StampModalContent;