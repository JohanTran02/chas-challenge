"use client";

import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import Link from 'next/link'

// images
import vector1 from '@/public/Vector-1.svg'
import vector2 from '@/public/Vector-2.svg'
import vector3 from '@/public/Vector-3.svg'

const GetStarted = () => {
  const [activeContainer, setActiveContainer] = useState<number>(0)
  const colors = ['green', 'blue', 'purple']

  const slideToContainer = (index: number): void => {
    const container = document.getElementById(`container${index+1}`) as HTMLDivElement;
    container.scrollIntoView({behavior: 'smooth'/* , block: 'end', inline: 'nearest' */});
    setActiveContainer(index);
    return
  }

  return (
  <div className="relative w-full rounded-2xl">
    <div 
      id="carousel" 
      className="flex w-full h-full rounded-2xl duration-500 overflow-x-auto snap-x no-scrollbar">
      <div id="container1" className="flex-none h-full w-full snap-center" >
        <div className="space-y-6 px-6 pt-6 pb-12">
          <div className="bg-darkGray w-3/6 h-8 rounded-md" />
          <div className="bg-darkGray w-full h-4 rounded-md" />
        </div>
        <div className="w-full ">
          <Image src={vector1} width={100} height={100} className="w-full h-auto p-10" alt="" />
        </div>
      </div>
      <div id="container2" className="flex-none flex flex-col-reverse gap-6 h-full w-full snap-center" >
        <div className="space-y-6 px-6 pt-6 pb-12">
          <div className="bg-darkGray w-3/6 h-8 rounded-md" />
          <div className="bg-darkGray w-full h-4 rounded-md" />
        </div>
        <div className="w-full ">
          <Image src={vector2} width={100} height={100} className="w-full h-auto p-10" alt="" />
        </div>
      </div>
      <div id="container3" className="flex-none h-full w-full snap-center space-y-6" >
        <div className="space-y-6 px-6 pt-6 pb-12">
          <div className="bg-darkGray w-3/6 h-8 rounded-md" />
          <div className="bg-darkGray w-full h-4 rounded-md" />
        </div>
        <div className="w-full ">
          <Image src={vector3} width={100} height={100} className="w-full h-auto p-10" alt=""  />
        </div>
      </div>
      
    </div>

    <ul className=" flex top-4 justify-center py-2">
      {colors.map((color, index) => {
        return (
          <div key={index} 
            className="text-4xl cursor-pointer"
            onClick={() => slideToContainer(index)}>
            <RxDotFilled className={`${activeContainer === index ? 'text-gray-700' : 'text-gray-300'} transition-colors`}/> 
          </div>
        )
      })}
    </ul>

    <Link href={'/dashboard/'}>
      <p className="text-end font-bold pt-8 underline">Hoppa över</p>
    </Link>
  </div>
  )
}

export default GetStarted;
