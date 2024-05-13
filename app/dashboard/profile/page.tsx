import React from 'react';
/* import styles from '@/app/ui/style/profile/profile.module.css'; */

const Page = () => {
  return (
    <>
<div className="border border-gray-900 h-2/5 w-full pb-6 flex flex-col justify-end items-center ">
  <img className="w-20 h-20" src="/profile-cat.svg" alt="" />
  <h1 className="text-white text-base font-bold pt-6">Användarnamn</h1>
  <div className="flex">
    <h6 className="text-white text-base font-bold mr-2">23 stamps</h6>
    <h6 className="text-white text-base font-bold">8 vänner</h6>
  </div>

      </div>
      <div className="bg-white h-3/5 w-full px-4 pt-6 pb-16 rounded-t-3xl">
            <div>
               <h1 className="text-black text-base font-bold ">DINA STAMPS</h1>
                  <div className='flex justify-evenly pt-2 '>
                    <img className="w-20 h-20" src="/flower-stamp.svg" alt="" />
                    <img className="w-20 h-20" src="/banana-stamp.svg" alt="" />
                    <img className="w-20 h-20" src="/bear-stamp.svg" alt="" />
                    <img className="w-20 h-20" src="/hotdog-stamp.svg" alt="" />
                  </div>
            </div>
            <div>
            {/* <h1 className="text-black text-base font-bold ">DINA STAMPS</h1> */}
            </div>
      </div>
    </>
  );
};

export default Page;