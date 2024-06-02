'use client'

import { Stampinfo } from '@/app/lib/definitions';
import Dialog from './Dialog';
import StampStats from './StampStats';
import ImageHandler from '../../ImageHandler';
import { useEffect, useState } from 'react';

type Prop = { prop: Stampinfo; completedStamps?: string | undefined }

const SpecificMission = ({ prop, completedStamps }: Prop) => {
  const [modal, setModal] = useState<Boolean>(false); 


  useEffect(() => {
    if(modal){
      openModal(); 
    }

  }, [modal])
  
  const openModal = (): void => {
    document.body.style.overflowY = 'hidden';
    const information = document.getElementById(`missionsModal-${prop.name}`) as HTMLDialogElement;
    information.showModal();
    information.scrollTo(0, 0);
  }
  
  const stampState = () => {
    if (completedStamps) {
      const completedStamp: string = completedStamps;
      // console.log(completedStamp)
      return `${completedStamp}.svg`
    }

    // console.log(prop.name)
    if (prop.name) { 
      const name = prop.name;
      // if (name === 'Orange' || name === 'Apple') return `placeholder-bronze.svg`;
      if (name === 'Banan' || name === 'Sten' || name === 'Stol') return `placeholder-silver.svg`;
      if (name === ('Gunters Korvar')) return `placeholder-guld.svg`;
      if (name === 'Gravsten' || name === 'Igelkott') return `placeholder-platinum.svg`;
    }
  }

  const rarity = stampState() as string;
  return (
    <>
      <div
        onClick={() => setModal(true)}
        className="bg-neturalWhite flex justify-between h-[135px] border-2 border-darkGreen py-2 px-3 rounded-xl">
        <div className="space-y-3 w-4/6 h-max font-bold">
          <p className="text-sm">Uppdrag</p>
          <p className="text-darkGreen text-xl uppercase">{prop.name}</p>
          <div className="flex mb-2">
            <StampStats prop={prop} />
          </div>
        </div>
        <div className="size-18 self-center" >
          <ImageHandler image={{
            src: `${rarity}`,
            height: 100,
            width: 100,
            alt: "mission placeholder",
          }} />
        </div>
      </div>
      {modal && <Dialog prop={prop} setModal={setModal}/>}
    </>
  )
}

export default SpecificMission;
