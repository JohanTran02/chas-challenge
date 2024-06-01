'use client'

import { setCoords } from '@/app/lib/redux/features/map/mapSlice';
import { Stampinfo } from '@/app/lib/definitions';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Mapbox from '../dashboard/map/Mapbox';
import CompletedMission from './CompletedMission';
import StampStats from './StampStats';
import ImageHandler from '../../ImageHandler';


const Dialog = ({ prop, rarity, handleModal }: { prop: Stampinfo; rarity: string | undefined; handleModal: () => void }) => {
  const { name, facts, latitude, longitude } = prop;
  const router = useRouter();
  const dispatch = useDispatch();

  const goToMap = () => {
    dispatch(setCoords(prop));
    console.log('Pushin to map component ' + prop)
    router.push('/dashboard/map/');
  }

  const closeModal = (): void => {
    document.body.style.overflowY = '';
    const information = document.getElementById(`missionsModal-${name}`) as HTMLDialogElement;
    information.close();
  }

  // Mapxbox styles
  const styleProp = { height: '400px', width: '365px', inset: '0 0 0 0', translate: '-60px -95px' };
  return (

    <dialog
      id={`missionsModal-${name}`}
      className="relative w-5/6 max-w-[500px] max-h-[600px] m-auto rounded-3xl border-darkGreen border-2 overflow-y-auto no-scrollbar"
    >
      {/* <div className="sticky bg-white inset-0 translate-y-[15%] h-full rounded-3xl z-[-1]" /> */}



      <CompletedMission prop={prop} closeModal={closeModal} />


      {
        // <div className="flex flex-col w-full h-full px-4 py-6">
        //   <button
        //     aria-label='Close button'
        //     onClick={closeModal}
        //     className="absolute right-0 top-0 my-6 mx-6 font-bold text-2xl text-darkGreen">
        //     <ImageHandler image={{src:'close-button.svg', width:35, height:35, className:'size-4', alt:'close-button'}}  />
        //   </button>
        //   <div className="bg-white w-full space-y-6">
        //     <div className="bg-green-800 size-32 rounded-full self-center mx-auto" />
        //     <h1 className='font-bold text-black text-center'>Uppdrag: {name}</h1>
        //     <div className="flex font-extrabold">
        //       <StampStats prop={prop}/>
        //     </div>
        //     <div className="flex gap-3 h-[140px]">
        //       <div className="w-32 border-2 border-black p-2 h-full line-clamp-4 text-[13px]">
        //         Ai-genererad bild på objektet man ska fota som hjälp
        //       </div>
        //       <article className='flex-1 space-y-2 h-full '>
        //         <h2 className='font-bold'>Beskrivning:</h2>
        //         <p className='text-[12px] line-clamp-6'>{facts}</p>
        //       </article>
        //     </div>

        //     <div className="relative h-[128px] w-[265px] mx-auto overflow-hidden rounded-xl"
        //       onClick={goToMap}>
        //       <Mapbox
        //         styleProp={styleProp}
        //         longitude={longitude}
        //         latitude={latitude}
        //         interactive={false}
        //         navcontrol={false}
        //         geocontrol={false}
        //         facts={facts}
        //         name={name}
        //         trackResize={false}
        //       />
        //     </div>

        //     <div className="w-full h-[75px] flex justify-center items-end pb-[10px]" onClick={handleModal}>
        //       <button className='py-3 px-8 size-max bg-darkGreen text-[12px] text-white font-bold rounded-full'>Starta uppdrag
        //       </button>
        //     </div>

        //   </div>
        // </div>

      }
    </dialog>

  )
}

export default Dialog;