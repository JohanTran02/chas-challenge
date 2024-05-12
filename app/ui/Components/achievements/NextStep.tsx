'use client'

import { useRouter } from "next/navigation"
import { ReactNode } from "react";

const NextStep = ({children}: {children: ReactNode}) => {
  const router = useRouter();
  const goToMission = () => router.push('/dashboard/achievements/mission');
  return (
    <div
      className="flex-1 flex flex-col justify-around w-full border-[3px] border-darkGreen rounded-xl" 
      onClick={goToMission}>
      {children}
    </div>
  )
}

export default NextStep
