import React from 'react';
/* import styles from '@/app/ui/style/profile/profile.module.css'; */

const Page = () => {
  return (
    <>
<div className=" h-2/5 w-full pb-6 flex flex-col justify-end items-center ">
  <img className="w-20 h-20" src="/profile-cat.svg" alt="" />
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
               <h6 className='text-black text-sm underline font-bold'>SE ALLA</h6>
              </div>
              
                  <div className='flex justify-evenly mt-4'>
                    <img className="w-20 h-20" src="/flower-stamp.svg" alt="" />
                    <img className="w-20 h-20" src="/banana-stamp.svg" alt="" />
                    <img className="w-20 h-20" src="/bear-stamp.svg" alt="" />
                    <img className="w-20 h-20" src="/hotdog-stamp.svg" alt="" />
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
                      <img className="w-12 h-12" src="/profile-dog.svg" alt="" />
                    <h6 className='pl-4'> Polare</h6>
                    </div>
                   <div className='flex items-center justify-between pt-4'>
                     <img className="w-12 h-12" src="/profile-beaver.svg" alt="" />
                    <h6 className='pl-4'> Homie</h6>
                   </div>
                </div>
                   <div>
                      <div className='flex items-center justify-between'>
                         <img className="w-12 h-12" src="/profile-dog2.svg" alt="" />
                        <h6 className='pl-4'> Kompis</h6>
                      </div>
                        <div className='flex items-center pt-4'>
                             <img className="w-12 h-12" src="/profile-cat.svg" alt="" />
                             <h6 className='pl-4'> Bror</h6>
                        </div>
                   </div>
                 
              </div>
            </div>

              
      </div>
    </>
  );
};

export default Page;