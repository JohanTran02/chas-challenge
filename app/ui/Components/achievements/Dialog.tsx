'use client'

import { setCoords } from '@/app/lib/redux/features/map/mapSlice';
import { Stampinfo } from '@/app/lib/definitions';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import CompletedMission from './CompletedMission';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Camera from '../../camera/Camera';
import StartMission from './StartMission';


const Dialog = ({ stamp: stamp, setModal, rarityPlaceholder }: { stamp: Stampinfo; rarityPlaceholder: string; setModal: Dispatch<SetStateAction<Boolean>> }) => {
  const [transition, setTransition] = useState("opacity-0 pointer-events-none");
  const [unlockedImg, setUnlockedImg] = useState<string | null>(null)
  const [openCamera, setOpenCamera] = useState<boolean>(false)
  const { name, facts, latitude, longitude } = stamp;
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const body = document.body; 
    if (unlockedImg) {
      body.style.overflowY = 'hidden';
      body.scrollIntoView();
      const information = document.getElementById(`missionsModal-${stamp.name}`) as HTMLDialogElement;
      information.scrollTo(0, 0);
    } else {
      body.scrollIntoView();
      body.style.overflowY = 'auto'
    }
  }, [unlockedImg, stamp])

  const handleCamera = () => {
    setOpenCamera(prev => !prev); 
    transition.includes("opacity-0") ? setTransition("opacity-100") : setTransition("opacity-0 pointer-events-none");
  }

  const goToMap = () => {
    dispatch(setCoords(stamp));
    console.log('Pushin to map component ' + stamp)
    router.push('/dashboard/map/');
  }

  const closeModal = (setModal: Dispatch<SetStateAction<Boolean>>): void => {
    document.body.style.overflowY = 'auto';
    const information = document.getElementById(`missionsModal-${name}`) as HTMLDialogElement;
    information.close();
    setModal(false);
  }

  return (

    <dialog
      id={`missionsModal-${name}`}
      className={`relative w-5/6 max-w-[500px] max-h-[600px] m-auto rounded-3xl border-darkGreen  border-2 overflow-y-auto no-scrollbar`}
    >
      {openCamera && <div className={`transition-opacity ${transition} fixed top-0 left-0 z-40 w-full h-full`}>
        <Camera prop={stamp} handleCamera={handleCamera} setTransition={setTransition} setUnlockedImg={setUnlockedImg} />
      </div>}
      {/* <div className="sticky bg-white inset-0 translate-y-[15%] h-full rounded-3xl z-[-1]" /> */}

      {
        unlockedImg ? <CompletedMission prop={stamp} setModal={setModal} closeModal={closeModal} unlockedImg={unlockedImg} /> : 
        <StartMission 
          stamp={stamp} 
          goToMap={goToMap}
          setModal={setModal}
          handleCamera={handleCamera}
          closeModal={closeModal} 
          rarityPlaceholder={rarityPlaceholder}
        />
      }
    </dialog>

  )
}

export default Dialog;