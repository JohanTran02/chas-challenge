import Image from 'next/image';
// Stamps
import hotdog_stamp from '/chas-challenge/hotdog-stamp.svg'
import banana_stamp from '/chas-challenge/banana-stamp.svg'
import bear_stamp from '/chas-challenge/bear-stamp.svg'
import flower_stamp from '/chas-challenge/flower-stamp.svg'
import NextStep from './NextStep';

const stamps: string[] = [hotdog_stamp, banana_stamp, bear_stamp, flower_stamp]

const MissonsCategory = () => {

  return (
    <div className='flex flex-wrap justify-around gap-8'>
      {stamps.map((stamp) => {
        return (
          <div key={stamp} className="flex flex-col items-center font-bold h-56 w-36">
            <p className="pb-1 text-lg self-start">KATEGORI</p>
            <NextStep>
              <div className="w-5/6 mx-auto mt">
                <Image src={stamp} alt='' height={135} width={106} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className="flex items-center gap-2 px-1">
                <div className="bg-white h-2 w-full border-[1px] border-darkGreen rounded-xl">
                  <div className="h-full w-[70%] bg-[#598f7d] rounded-sm" />
                </div>
                <div className="flex-grow flex-shrink-0">
                  <p className="text-sm font-bold">7 / 10</p>
                </div>
              </div>
            </NextStep>
          </div>
        )
      })}
    </div>
  )
}

export default MissonsCategory;
