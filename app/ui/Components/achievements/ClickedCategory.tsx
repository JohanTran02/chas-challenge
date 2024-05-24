import { ReactNode } from "react";
import SpecificMission from "./SpecificMission";


const ClickedCategory = () => {
  const missions: ReactNode[] = [<SpecificMission />, <SpecificMission />, <SpecificMission />, <SpecificMission />] 
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
        {missions.map((reactNode, index) => <li key={index}>{reactNode}</li>)}
      </ul>
    </div>
  )
}

export default ClickedCategory;
