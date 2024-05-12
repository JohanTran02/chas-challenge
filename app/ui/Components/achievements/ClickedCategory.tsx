import { ReactNode } from "react";
import SpecificMission from "./SpecificMission";


const ClickedCategory = () => {
  const missions: ReactNode[] = [<SpecificMission />, <SpecificMission />, <SpecificMission />, <SpecificMission />] 
  return (
    <div>
      <div className="flex items-center justify-end gap-2 px-1">
        <div className="bg-white h-2 w-2/6 border-[1px] border-darkGreen rounded-xl"> 
          <div className="h-full w-[70%] bg-[#598f7d] rounded-sm" />
        </div>
        <div className="flex-grow-0 flex-shrink-0">
          <p className="text-sm font-bold">7 / 10</p>
        </div>
      </div>
      <ul className="pt-6 space-y-4">
        {missions.map((reactNode, index) => <li key={index}>{reactNode}</li>)}
      </ul>
    </div>
  )
}

export default ClickedCategory;
