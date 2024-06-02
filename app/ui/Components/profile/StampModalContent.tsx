import { XMarkIcon } from '@heroicons/react/24/outline';
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/redux/store";
import StampContainer from './StampContainer';

export default function StampModalContent({ onClose }: { onClose: () => void }) {
  const { collectedStamps } = useSelector((state: RootState) => state.stamp);
  const stamps = ["banana", "banana", "banana", "banana"]
  return (
    <div className="w-full relative">
      <XMarkIcon className="absolute top-4 right-2 w-8 cursor-pointer" onClick={onClose} />
      <div className='flex flex-col gap-5 p-4 h-[73vh]'>
        <div className='grid gap-4 overflow-scroll no-scrollbar'>
          <div className='grid gap-2 '>
            <h1 className='uppercase font-bold text-lg ml-4'>Start</h1>
            <div className='grid grid-cols-2 gap-5 '>
              {
                stamps.map((stamp, index) => {
                  return (
                    <div className='mx-auto space-y-2' key={index}>
                      <StampContainer stamp={stamp} />
                      <h1 className='text-center text-xl font-bold capitalize'>{stamp}</h1>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};