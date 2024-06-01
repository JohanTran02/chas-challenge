'use client'

import { Stampinfo } from '@/app/lib/definitions';
import Dialog from './Dialog';
import StampStats from './StampStats';
import ImageHandler from '../../ImageHandler';

type Prop = { prop: Stampinfo; completedStamps?: string | undefined }

const SpecificMission = ({ prop, completedStamps }: Prop) => {
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
      if (name === 'Orange' || name === 'Apple') return `placeholder-bronze.svg`
      if (name === 'Banana') return `placeholder-silver.svg`
      if (name === 'Pear' || name === 'Clementine') return `placeholder-guld.svg`
    }
  }

  const rarity = stampState() as string;
  return (
    <>
      <div
        onClick={openModal}
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
            alt: "",
          }} />
        </div>
      </div>
      <Dialog prop={prop} />
    </>
  )
}

export default SpecificMission;
