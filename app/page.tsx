'use client'

import { poppins } from './ui/fonts';
// import logo from '/chas-challenge/Logo.svg';
import Image from 'next/image'
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

//Error i prod pga fonts fixa skiten  https://stackoverflow.com/questions/67990923/how-to-load-custom-fonts-in-a-next-js-app-when-its-in-production

export default function Home() {
  useEffect(() => {
    const handler = setTimeout(() => redirect('/signin'), 2000);
    return () => clearTimeout(handler)
  });
  const logo = '/chas-challenge/Images/Logo.svg';

  return (
    <div className='h-full w-full py-4'>
      <div className="">
        <Image
          className='w-full max-w-[600px] h-auto mx-auto'
          src={logo} height={350} width={350} alt='Application logo'
        />
      </div>
      <h1 className={`text-4xl font-bold text-darkGreen text-center ${poppins.className}`}>
        <span className='block pb-4'>OUTDOOR</span>
        <span className='block'>EXPLORER</span>
      </h1>
    </div>
  );
}
