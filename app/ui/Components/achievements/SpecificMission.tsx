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
    const body = document.body; 
    if (modal) {
      body.scrollIntoView();
      body.style.overflowY = 'hidden';

      const information = document.getElementById(`missionsModal-${prop.name}`) as HTMLDialogElement;
      information.showModal();
      information.scrollTo({top: 0, left: 0,  behavior: 'instant'});
    }

  }, [modal, prop.name])

  const stampState = () => {
    if (completedStamps) {
      const completedStamp: string = completedStamps;
      // console.log(completedStamp)
      return `${completedStamp}.svg`.toLowerCase().replace(/\\s+/g, '');
    }

    // console.log(prop.name)
    if (prop.name) {
      const name = prop.name;
      if (name === 'Stol' || name === 'Sten' || name === 'Banan') return `placeholder-bronze.svg`;
      if (name === 'Gunters Korvar') return `placeholder-silver.svg`;
      if (name === 'Gravsten') return `placeholder-guld.svg`;
      if (name === 'Igelkott') return `placeholder-platinum.svg`;
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
            className: 'object-contain size-24'
          }} />
        </div>
      </div>
      {modal && <Dialog stamp={prop} rarityPlaceholder={rarity} setModal={setModal} />}
    </>
  )
}

export default SpecificMission;
