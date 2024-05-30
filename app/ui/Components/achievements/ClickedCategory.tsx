"use client"
import SpecificMission from "./SpecificMission";

// Redux
import { RootState } from "@/app/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ClickedCategory = () => {
  const { stamps, clickedCategory } = useSelector((state: RootState) => state.stamp);
  const markerInfo = useSelector((state: RootState) => state.map.markerInfo);
  const dispatch = useDispatch();

  // Resets the state to null if it has value so the marker is visible for all mini maps.
  useEffect(() => {
    if (markerInfo) {
      dispatch({ type: 'map/setCoords', payload: null })
    }

    return () => { }
  }, [dispatch, markerInfo])

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
          if (stamp.title === clickedCategory) {
            return stamp.stamps.map((stamp, index) => <li key={index}><SpecificMission prop={stamp} /></li>)
          }
          return null;
        })}
      </ul>
    </div>
  )
}

export default ClickedCategory;
