'use client'

import { Stampinfo } from '@/app/lib/definitions';
import Dialog from './Dialog';
import StampStats from './StampStats';
import ImageHandler from '../../ImageHandler';

type Prop = { prop: Stampinfo; completedStamps?: (string | undefined)[] }

const SpecificMission = ({ prop, completedStamps }: Prop) => {
  const openModal = (): void => {
    document.body.style.overflowY = 'hidden';
    const information = document.getElementById(`missionsModal-${prop.name}`) as HTMLDialogElement;
    information.showModal();
    information.scrollTo(0, 0);
  }

  const rarityName = (): string => {
    const rarityNames = [
      { rarity: 'bronze', name: ['banana', 'stol', 'sten'] },
      { rarity: 'silver', name: ['korv'] },
      { rarity: 'guld', name: ['gravsten'] },
      { rarity: 'platinum', name: ['igelkott'] }
    ];

    const index = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    return rarityNames[index].rarity;
  }

  const rarity = rarityName();
  return (
    <>
      <div
        onClick={openModal}
        className="bg-neturalWhite flex justify-between h-[125px] border-2 border-darkGreen p-2 rounded-xl">
        <div className="space-y-3 w-4/6 h-max font-bold">
          <p className="text-sm">Uppdrag</p>
          <p className="text-darkGreen text-xl">{prop.name}</p>
          <div className="flex mb-2">
            <StampStats prop={prop} />
          </div>
        </div>
        <div className="size-18 self-center" >
          <ImageHandler image={{
            src: `placeholder-${rarity}.svg`,
            height: 100,
            width: 100,
            alt: "",
          }} />
        </div>
      </div>
      <Dialog prop={prop} rarity={rarity} />
    </>
  )
}

export default SpecificMission;
