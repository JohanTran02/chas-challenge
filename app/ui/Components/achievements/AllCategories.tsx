"use client"

import Image from 'next/image';
import NextStep from './NextStep';
import { getStampsInfo } from "@/app/lib/CC_Backend/stamps";
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';

async function getStamps(accessToken: string) {
  const response = [
    await getStampsInfo('getcategorywithstamps', 'categoryId', 1, accessToken),
    await getStampsInfo('getcategorywithstamps', 'categoryId', 2, accessToken),
    await getStampsInfo('getcategorywithstamps', 'categoryId', 3, accessToken),
    await getStampsInfo('getcategorywithstamps', 'categoryId', 4, accessToken),
  ];

  const [fruits, noName, noName2, furniture] = await Promise.all(response);
  const stamps: { img: string; category: any }[] = [
    { img: '/Images/hotdog-stamp.svg', category: fruits },
    { img: '/Images/banana-stamp.svg', category: noName },
    { img: '/Images/bear-stamp.svg', category: noName2 },
    { img: '/Images/flower-stamp.svg', category: furniture }
  ]

  return stamps;
}

const AllCategories = () => {
  const [cookies] = useCookies(["accessToken"]);
  const [stamps, setStamps] = useState<{ img: string; category: any }[]>({} as { img: string; category: any }[])
  useEffect(() => {
    const updateStamps = async () => {
      const updatedStamps = await getStamps(cookies.accessToken);
      setStamps(updatedStamps);
    }
    updateStamps();
  }, [cookies])
  // AKTIVA queries
  // categoryId = 1 --> 'Fruits'
  // categoryId = 4 --> 'Furniture'

  // ICKE AKTIVA queries
  // categoryId = 2 --> 'Fruits'
  // categoryId = 3 --> 'Fruits'


  // response.map(categoryId => stampCategories('getcategorywithstamps', 'categoryId', categoryId)); 

  return (
    <div className='flex flex-wrap justify-around gap-8'>
      {stamps.length > 1 && stamps.map((stamp) => {
        return (
          <>
            {(stamp.category !== undefined) &&
              <div className="flex flex-col items-center font-bold h-56 w-36">
                <p className="pb-1 text-lg self-start">
                  {stamp.category.title}
                </p>
                <NextStep category={stamp.category} title={stamp.category.title}>
                  <div className="w-5/6 mx-auto mt">
                    <Image src={stamp.img} alt='' height={135} width={106} style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="flex items-center gap-2 px-1">
                    <div className="bg-white h-2 w-full border-[1px] border-darkGreen rounded-xl">
                      <div className="h-full w-[70%] bg-[#598f7d] rounded-sm" />
                    </div>
                    <div className="flex-grow flex-shrink-0">
                      <p className="text-sm font-bold">7 / 10</p>
                    </div>
                  </div>
                </NextStep>
              </div>}
          </>
        )
      })}
    </div>
  )
}

export default AllCategories;