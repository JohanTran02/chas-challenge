'use client'

import { StampCategories } from "@/app/lib/definitions";
import { useRouter } from "next/navigation"
import { ReactNode } from "react";
import { useDispatch } from "react-redux";

type Prop = { 
  title: string, 
  children: ReactNode; 
  redirect: false | true 
  category: StampCategories; 
}

const NextStep = ({ children, category, title, redirect}: Prop) => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const goToMission = () => {
    dispatch({ type: 'stamp/setTitle', payload: title });
    dispatch({ type: 'stamp/setSpecificStampInfo', payload: category });
    router.push('/dashboard/achievements/mission')
  };

  const redirectState = (state: false | true) => {
    if(state) return goToMission(); 
    return 
  }

  return (
    <div
      className="flex-1 flex flex-col justify-around w-full border-[3px] border-darkGreen rounded-xl"
      onClick={() => redirectState(redirect)}
    >
      {children}
    </div>
  )
}

export default NextStep
