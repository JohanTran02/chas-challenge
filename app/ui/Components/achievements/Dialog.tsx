'use client'

import { setCoords } from '@/app/lib/redux/features/map/mapSlice';
import { Stampinfo } from '@/app/lib/definitions';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Mapbox from '../dashboard/map/Mapbox';
import CompletedMission from './CompletedMission';
import StampStats from './StampStats';
import ImageHandler from '../../ImageHandler';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Camera from '../../camera/Camera';


const Dialog = ({ prop, setModal }: { prop: Stampinfo; setModal: Dispatch<SetStateAction<Boolean>> }) => {
  const [transition, setTransition] = useState("opacity-0 pointer-events-none");
  const [unlockedImg, setUnlockedImg] = useState<string | null>(null)
  const { name, facts, latitude, longitude } = prop;
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (unlockedImg) {
      document.body.style.overflowY = '';
      const information = document.getElementById(`missionsModal-${prop.name}`) as HTMLDialogElement;
      information.scrollTo(0, 0);
    }
  }, [unlockedImg, prop])

  const handleCamera = () => {
    transition.includes("opacity-0") ? setTransition("opacity-100") : setTransition("opacity-0 pointer-events-none");
  }

  const goToMap = () => {
    dispatch(setCoords(prop));
    console.log('Pushin to map component ' + prop)
    router.push('/dashboard/map/');
  }

  const closeModal = (setModal: Dispatch<SetStateAction<Boolean>>): void => {
    document.body.style.overflowY = '';
    const information = document.getElementById(`missionsModal-${name}`) as HTMLDialogElement;
    information.close();
    setModal(false);
  }

  // Mapxbox styles
  const styleProp = { height: '400px', width: '365px', inset: '0 0 0 0', translate: '-50px -135px' };
  return (

    <dialog
      id={`missionsModal-${name}`}
      className="relative w-5/6 max-w-[500px] max-h-[600px] m-auto rounded-3xl border-darkGreen bg-darkGreen border-2 overflow-y-auto no-scrollbar"
    >
      <div className={`transition-opacity ${transition} fixed top-0 left-0 z-40 w-full h-full`}>
        <Camera prop={prop} handleCamera={handleCamera} setTransition={setTransition} setUnlockedImg={setUnlockedImg} />
      </div>
      {/* <div className="sticky bg-white inset-0 translate-y-[15%] h-full rounded-3xl z-[-1]" /> */}

      {
        unlockedImg ? <CompletedMission prop={prop} setModal={setModal} closeModal={closeModal} unlockedImg={unlockedImg} /> :
          <div className="flex flex-col w-full h-full">
            <button
              aria-label='Close button'
              onClick={() => closeModal(setModal)}
              className="absolute right-0 top-0 my-6 mx-6 font-bold text-2xl text-darkGreen">
              <ImageHandler image={{ src: 'close-button.svg', width: 35, height: 35, className: 'size-4', alt: 'close-button' }} />
            </button>
            <div className="bg-white w-full space-y-6 px-4 py-6">
              <div className="bg-green-800 size-32 rounded-full self-center mx-auto" />
              <h1 className='font-bold text-black text-center'>Uppdrag: {name}</h1>
              <div className="flex font-extrabold">
                <StampStats prop={prop} />
              </div>
              <div className="flex gap-3 h-[140px]">
                <div className="w-32 border-2 border-black p-2 h-full line-clamp-4 text-[13px]">
                  Ai-genererad bild på objektet man ska fota som hjälp
                </div>
                <article className='flex-1 space-y-2 h-full '>
                  <h2 className='font-bold'>Beskrivning:</h2>
                  <p className='text-[12px] line-clamp-6'>{facts}</p>
                </article>
              </div>

              <div className="relative h-[128px] w-[265px] mx-auto overflow-hidden rounded-xl"
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
              </div>

              <div className="w-full h-[75px] flex justify-center items-end pb-[10px]" onClick={handleCamera}>
                <button className='py-3 px-8 size-max bg-darkGreen text-[12px] text-white font-bold rounded-full'>Starta uppdrag
                </button>
              </div>

            </div>
          </div>
      }
    </dialog>

  )
}

export default Dialog;