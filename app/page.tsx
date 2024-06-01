import { poppins } from '../public/fonts';
import ImageHandler from './ui/ImageHandler';

export default function Home() {
  const logo = "Logo_Dark_2D.svg";
  return (
    <div className='h-full w-full py-4'>
      <div className="">
        <ImageHandler image={{
          height: 350,
          width: 350,
          className: 'w-full max-w-[600px] h-auto mx-auto',
          alt: 'Application logo',
          src: logo,
        }} />
      </div>
      <h1 className={`text-4xl font-bold text-darkGreen text-center ${poppins.className}`}>
        <span className='block pb-4'>OUTDOOR</span>
        <span className='block'>EXPLORER</span>
      </h1>
    </div>
  );
}
