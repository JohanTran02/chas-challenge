"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import ImageHandler from "../../ImageHandler";

const GetStarted = ({ dispatch }: { dispatch: Dispatch<SetStateAction<boolean | null>> }) => {
  const [activeContainer, setActiveContainer] = useState<number>(0)
  const colors = ['green', 'blue', 'purple']

  const slideToContainer = (index: number): void => {
    const container = document.getElementById(`container${index + 1}`) as HTMLDivElement;
    container.scrollIntoView({ behavior: 'smooth'/* , block: 'end', inline: 'nearest' */ });
    setActiveContainer(index);
    return
  }

  const onScroll = (setActiveContainer: Dispatch<SetStateAction<number>>) => {
    const carousel = document.getElementById('carousel') as HTMLDivElement;
    // .scrollLeft is a property returning a number for current scroll position. 0 --> start position. 
    if (carousel.scrollLeft === 0) setActiveContainer(0);
    if (carousel.scrollLeft === (carousel.scrollWidth / 3)) setActiveContainer(1);
    if (carousel.scrollLeft === (carousel.scrollWidth / 3) * 2) setActiveContainer(2);
  }

  return (
    <div className="relative w-full rounded-2xl">
      <div
        onScrollCapture={() => onScroll(setActiveContainer)}
        id="carousel"
        className="flex w-full h-full max-w-[400px] rounded-2xl overflow-x-scroll snap-x no-scrollbar">
        <div id="container1" className="flex-none h-full w-full snap-center" >
          <div className="space-y-6 px-6 pt-6 pb-12">
            <div className="bg-darkGray w-3/6 h-8 rounded-md" />
            <div className="bg-darkGray w-full h-4 rounded-md" />
          </div>
          <div className="w-full ">
            <ImageHandler image={{
              src: "Vector-1.svg",
              alt: "",
              width: 100,
              height: 100,
              className: "w-full h-auto p-10"
            }} />
          </div>
        </div>
        <div id="container2" className="flex-none flex flex-col-reverse gap-6 h-full w-full snap-center" >
          <div className="space-y-6 px-6 pt-6 pb-12">
            <div className="bg-darkGray w-3/6 h-8 rounded-md" />
            <div className="bg-darkGray w-full h-4 rounded-md" />
          </div>
          <div className="w-full ">
            <ImageHandler image={{
              src: "Vector-2.svg",
              alt: "",
              width: 100,
              height: 100,
              className: "w-full h-auto p-10"
            }} />
          </div>
        </div>
        <div id="container3" className="flex-none h-full w-full snap-center space-y-6" >
          <div className="space-y-6 px-6 pt-6 pb-12">
            <div className="bg-darkGray w-3/6 h-8 rounded-md" />
            <div className="bg-darkGray w-full h-4 rounded-md" />
          </div>
          <div className="w-full ">
            <ImageHandler image={{
              src: "Vector-3.svg",
              alt: "",
              width: 100,
              height: 100,
              className: "w-full h-auto p-10"
            }} />
          </div>
        </div>

      </div>

      <ul className=" flex top-4 justify-center py-2">
        {colors.map((color, index) => {
          return (
            <div key={index}
              className="text-4xl cursor-pointer"
              onClick={() => slideToContainer(index)}>
              <RxDotFilled className={`${activeContainer === index ? 'text-gray-700 scale-110' : 'text-gray-300 scale-95'} transition-all duration-200`} />
            </div>
          )
        })}
      </ul>

      <p className={`text-end font-bold pt-3 underline text-darkGreen`}
        onClick={() => dispatch(false)}
        aria-label="button"
      >
        {activeContainer === 2 ? 'Kom igång' : 'Hoppa över'}
      </p>

    </div>
  )
}

export default GetStarted;
