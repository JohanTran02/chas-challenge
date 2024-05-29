import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import StampContainer from './StampContainer';

type Items = {
  category: string,
  stamps: Stamp[]
}

type Stamp = {
  src: string,
  name: string,
  description: string,
}

export default function StampModalContent({ onClose }: { onClose: () => void }) {

  const stamps: Items[] = [
    {
      category: "string",
      stamps: [
        { src: "/Images/flower-stamp.svg", name: "flower", "description": "flower" },
        { src: "/Images/banana-stamp.svg", name: "banana", "description": "banana" },
        { src: "/Images/bear-stamp.svg", name: "bear", "description": "bear" },
        { src: "/Images/hotdog-stamp.svg", name: "hotdog", "description": "hotdog" },
        { src: "/Images/hotdog-stamp.svg", name: "hotdog", "description": "hotdog" },
        { src: "/Images/hotdog-stamp.svg", name: "hotdog", "description": "hotdog" },
      ]
    },
    {
      category: "test",
      stamps: [
        { src: "/Images/flower-stamp.svg", name: "flower", "description": "flower" },
        { src: "/Images/banana-stamp.svg", name: "banana", "description": "banana" },
        { src: "/Images/bear-stamp.svg", name: "bear", "description": "bear" },
        { src: "/Images/hotdog-stamp.svg", name: "hotdog", "description": "hotdog" },
      ]
    },
  ]

  return (
    <div className="w-full relative">
      <XMarkIcon className="absolute top-1 right-1 w-8 cursor-pointer" onClick={onClose} />
      <div className='flex flex-col gap-5 p-4 h-[70vh]'>
        <h1>Dina Stamps</h1>
        <div className='grid gap-4 overflow-scroll no-scrollbar'>
          {
            stamps.map((stamp) => {
              return <StampContainer stamp={stamp} key={stamp.category} />
            })
          }
        </div>
      </div>
    </div>
  );
};