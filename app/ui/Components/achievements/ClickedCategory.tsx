"use client"
import SpecificMission from "./SpecificMission";

// Redux
import { RootState } from "@/app/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";

// react hooks
import { useEffect, useState } from "react";
import { getCompletedStamps } from "@/app/lib/CC_Backend/stamps";

// cookies
import { useCookies } from "react-cookie";

// components
import SkeletonLoaderMissions from "../skeleton loaders/SkeletonLoaderMissions";

type CompletedStamps = { name: string; icon: null }[]

const ClickedCategory = () => {
  const [cookies] = useCookies(['accessToken']);

  // useState
  const [completedStamps, setCompletedStamps] = useState<Partial<CompletedStamps>>([] as CompletedStamps);
  const [isLoading, setIsLoading] = useState<boolean>(true); // for skeleton loader

  // redux
  const { stamps, collectedStampsProcentage, collectedStamps } = useSelector((state: RootState) => state.stamp);
  const dispatch = useDispatch();
  const allStamps = stamps && stamps[0].stamps;

  useEffect(() => {
    // console.log(completedStamps)
    const completed = async (accessToken: string) => {
      const response = await getCompletedStamps(accessToken, setIsLoading, dispatch);
      setCompletedStamps(response);
    }
    completed(cookies.accessToken)
  }, [cookies.accessToken, dispatch])

  return (
    <div>
      <div className="flex items-center gap-2 px-1 w-full">
        <p className="flex-1 font-bold">SAMLADE STAMPS</p>
        {(stamps !== null && !isLoading) && <div className="flex-1 flex items-center gap-4">
          <div className="flex-1 bg-white h-2 w-full border-[1px] border-darkGreen rounded-xl">
            <div className={`h-full bg-[#598f7d] rounded-sm`}
              style={{ width: `${collectedStampsProcentage}%` }} />
          </div>
          <p className="text-sm font-bold">{collectedStamps.length} / {allStamps?.length}</p>
        </div>}
      </div>
      <ul className="pt-6 space-y-4">
        {(allStamps !== null && !isLoading) ? allStamps.map((stamp) => {
          const accomplishedStamps = completedStamps.find((obj) => obj?.name === stamp.name);

          if (!accomplishedStamps?.name)
            return <li key={stamp.stampId}><SpecificMission prop={stamp} /></li>

          if (accomplishedStamps)
            return <li key={stamp.stampId}><SpecificMission prop={stamp} completedStamps={accomplishedStamps.name} /></li>
        })
          : <SkeletonLoaderMissions />}
      </ul>
    </div>
  )
}

export default ClickedCategory;
