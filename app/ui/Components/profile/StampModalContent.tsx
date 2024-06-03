import { XMarkIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/lib/redux/store";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { getCompletedStamps } from "@/app/lib/CC_Backend/stamps"; // Import the action to fetch stamps
import StampContainer from './StampContainer';

export default function StampModalContent({ onClose }: { onClose: () => void }) {
  const dispatch = useDispatch(); // Define dispatch
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cookies] = useCookies(['accessToken']);
  const { stamps, collectedStamps } = useSelector((state: RootState) => state.stamp);
  const allStamps = stamps && stamps[0].stamps;

  useEffect(() => {
    const fetchStamps = async () => {
      try {
        await getCompletedStamps(cookies.accessToken, setIsLoading, dispatch);
      } catch (error) {
        console.error("Error fetching stamps:", error);
      }
    };

    if (cookies.accessToken) {
      fetchStamps();
    }
  }, [cookies.accessToken, dispatch]);

  return (
    <div className="w-full relative">
      <XMarkIcon className="absolute top-4 right-2 w-8 cursor-pointer" onClick={onClose} />
      <div className='flex flex-col gap-5 p-4 h-[73vh]'>
        <div className='grid gap-4 overflow-scroll no-scrollbar'>
          <div className='grid-2 gap-2 '>
            <h1 className='uppercase font-bold text-lg ml-4'>Stamp</h1>
            <div className="pt-6  grid grid-cols-2 gap-4 justify-center ml-8">
              {/* Display completed stamps */}
              {collectedStamps.map((completedStamp) => (
                <div key={completedStamp}><StampContainer stamp={completedStamp} /></div>
              ))}
              {/* Display uncompleted stamps */}
              {allStamps && allStamps.map((stamp) => {
                const isCompleted = collectedStamps.includes(stamp.name);
                if (!isCompleted) {
                  return <li key={stamp.stampId}><StampContainer stamp={stamp.name} /></li>;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

