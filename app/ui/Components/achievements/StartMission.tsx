import { Stampinfo } from '@/app/lib/definitions';
import React, { Dispatch, SetStateAction } from 'react'
import ImageHandler from '../../ImageHandler';
import StampStats from './StampStats';
import Mapbox from '../dashboard/map/Mapbox';

type Prop = {
  stamp: Stampinfo,
  rarityPlaceholder: string;
  goToMap: () => void;
  handleCamera: () => void;
  setModal: Dispatch<SetStateAction<Boolean>>;
  closeModal: (setModal: Dispatch<SetStateAction<Boolean>>) => void;
}

const StartMission = ({ stamp, goToMap, handleCamera, setModal, closeModal, rarityPlaceholder }: Prop) => {
  const { name, facts, latitude, longitude } = stamp;
  // Mapxbox styles
  const styleProp = { height: '400px', width: '365px', inset: '0 0 0 0', translate: '-50px -135px' };

  return (
    <div className="flex flex-col w-full h-full mt-28 ">
      <button
        aria-label='Close button'
        onClick={() => closeModal(setModal)}
        className="absolute right-0 top-0 my-6 mx-6 font-bold text-2xl text-darkGreen">
        <ImageHandler image={{ src: 'close-button.svg', width: 35, height: 35, className: 'size-4', alt: 'close-button' }} />
      </button>
      <div className="bg-white w-full space-y-6 px-4 py-6 rounded-3xl">
        <div className="absolute top-[33px] left-1/2 translate-x-[-50%]">
          <ImageHandler image={{
            src: rarityPlaceholder,
            alt: 'mission placeholder',
            width: 160,
            height: 160,
            className: 'size-32 mx-auto',
            priority: true,
          }} />
        </div>
        <h1 className='font-bold text-black text-center pt-4'>Uppdrag: {name.toLocaleUpperCase()}</h1>
        <div className="flex font-extrabold">
          <StampStats stamp={stamp} />
        </div>
        <div className="flex gap-3 h-[140px]">
          <div className="w-32 border-2 border-black h-full line-clamp-4 text-[13px]">
            <ImageHandler image={{
              src: `${stamp.name.replace(" ", "").toLowerCase()}.jpg`,
              alt: `${stamp.name}`,
              width: 150,
              height: 150,
              className: "h-full w-full object-cover object-center",
              priority: true,
            }} />
          </div>
          <article className='flex-1 space-y-2 h-full '>
            <h2 className='font-bold'>Beskrivning:</h2>
            <p className='text-[12px] line-clamp-6'>{facts}</p>
          </article>
        </div>

        {latitude && <div className="relative h-[128px] w-[265px] mx-auto overflow-hidden rounded-xl"
          onClick={goToMap}>
          <Mapbox
            styleProp={styleProp}
            longitude={longitude}
            latitude={latitude}
            interactive={false}
            navcontrol={false}
            geocontrol={false}
            facts={facts}
            name={name}
            trackResize={false}
          />
        </div>}

        <div className="w-full h-[75px] flex justify-center items-end pb-[10px]" onClick={handleCamera}>
          <button className='py-3 px-8 size-max bg-darkGreen text-[12px] text-white font-bold rounded-full'>Öppna kameran
          </button>
        </div>

      </div>
    </div>
  )
}

export default StartMission


