'use client'

import { StampCategories } from "@/app/lib/definitions";
import { useRouter } from "next/navigation"
import { ReactNode } from "react";
import { useDispatch } from "react-redux";

const NextStep = ({children, category, title}: {children: ReactNode; category: StampCategories; title: string}) => {
  const router = useRouter();
  const dispatch = useDispatch(); 
  const goToMission = () => {
    // console.log(title)
    // console.log(category)
    dispatch({type: 'stamp/setTitle', payload: title});
    dispatch({type: 'stamp/setSpecificStampInfo', payload: category}); 
    router.push('/dashboard/achievements/mission')
  };
  
  return (
    <div
      className="flex-1 flex flex-col justify-around w-full border-[3px] border-darkGreen rounded-xl" 
      onClick={goToMission}
      >
      {children}
    </div>
  )
}

export default NextStep
