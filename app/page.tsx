import Image from 'next/image'
import { poppins } from '../public/fonts';

export default function Home() {
  const logo = "/chas-challenge/Images/Logo_Dark_2D.svg";

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
