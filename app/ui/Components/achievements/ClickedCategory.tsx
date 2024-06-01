"use client"
import SpecificMission from "./SpecificMission";

// Redux
import { RootState } from "@/app/lib/redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCompletedStamps } from "@/app/lib/CC_Backend/stamps";
import { useCookies } from "react-cookie";

type CompletedStamps = { name: string; icon: null }[]

const ClickedCategory = () => {
  const [cookies] = useCookies(['accessToken']);
  const [completedStamps, setCompletedStamps] = useState<Partial<CompletedStamps>>([] as CompletedStamps);
  const { stamps, clickedCategory } = useSelector((state: RootState) => state.stamp);

  // useEffect(() => {
  //   console.log(completedStamps)
  //   const completed = async (accessToken: string) => {
  //     const response = await getCompletedStamps(accessToken);
  //     setCompletedStamps(response); 
  //   }

  //   completed(cookies.accessToken)
  // }, [])

  return (
    <div>
      <div className="flex items-center gap-2 px-1 w-full">
        <p className="flex-1 font-bold">SAMLADE STAMPS</p>
        <div className="flex-1 flex items-center gap-4">
          <div className="flex-1 bg-white h-2 w-full border-[1px] border-darkGreen rounded-xl">
            <div className="h-full w-[70%] bg-[#598f7d] rounded-sm" />
          </div>
          <p className="text-sm font-bold">7 / 10</p>
        </div>
      </div>
      <ul className="pt-6 space-y-4">
        {stamps !== null && stamps.map((stamp) => {
          return stamp.stamps.map((stamp, index) => {
            const accomplishedStamps = completedStamps.length > 0 && completedStamps.map((mission) => {
              if (mission?.name === stamp.name)
                return stamp.name;
            });

            if (!accomplishedStamps)
              return <li key={index}><SpecificMission prop={stamp} /></li>

            if (accomplishedStamps)
              return <li key={index}><SpecificMission prop={stamp} completedStamps={accomplishedStamps} /></li>
          })
        })}
      </ul>
    </div>
  )
}

export default ClickedCategory;
