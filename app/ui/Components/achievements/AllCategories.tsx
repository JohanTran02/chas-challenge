"use client"

import ImageHandler from '../../ImageHandler';
import NextStep from './NextStep';
import { getStampsInfo } from "@/app/lib/CC_Backend/stamps";
import style from '@/app/ui/style/achievements/allcategories.module.css'
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { RootState } from '@/app/lib/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonLoaderCategory from '../skeleton loaders/SkeletonLoader';

async function getStamps(accessToken: string) {
  const promise = Promise.resolve(3);
  const response = [
    await getStampsInfo('getcategorywithstamps', 'categoryId', 1, accessToken),
    promise,
    promise,
    promise,
  ];

  const [fruits, noName, noName2, furniture] = await Promise.all(response);
  const stamps: { img: string; category: any }[] = [
    { img: 'kategori.svg', category: fruits },
    { img: 'kategori-placeholder1.svg', category: noName },
    { img: 'kategori-placeholder2.svg', category: noName2 },
    { img: 'kategori-placeholder3.svg', category: furniture }
  ]

  return stamps;
}

const AllCategories = () => {
  const [cookies] = useCookies(["accessToken"]);
  const [stamps, setStamps] = useState<{ img: string; category: any }[]>([] as { img: string; category: any }[])
  const markerInfo = useSelector((state: RootState) => state.map.markerInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateStamps = async () => {
      const updatedStamps = await getStamps(cookies.accessToken);
      setStamps(updatedStamps);
    }
    updateStamps();
  }, [cookies])

  useEffect(() => {
    if (markerInfo) {
      dispatch({ type: 'map/setCoords', payload: null })
    }

    return () => { }
  }, [dispatch, markerInfo])

  return (
    <ul className={style.grid}>
      {stamps.length > 0 ? stamps.map((stamp, index) => {
        const redirect = index < 1 ? true : false;
        return (
          <li key={index}>
            {(stamp.category !== undefined) &&
              <div className="flex flex-col items-center font-bold h-56 max-w-[150px] min-w-[150px] category-card mx-auto">
                <p className="pb-1 text-base self-start">
                  {index < 1 ? 'INTRO' : 'KOMMER SNART'}
                </p>
                <NextStep redirect={redirect} category={stamp.category} title={stamp.category.title}>
                  <div className="flex-[3] grid place-items-center max-h-[192px]">
                    <ImageHandler image={{
                      src: stamp.img,
                      height: 100,
                      width: 100,
                      alt: "",
                      style: { width: index < 1 ? '95%' : '80%', height: 'auto' }
                    }} />
                  </div>
                </NextStep>
              </div>
            }
          </li>
        )
      }) : <SkeletonLoaderCategory />}
    </ul>
  )
}

export default AllCategories;
