import Image from 'next/image';
import NextStep from './NextStep';
import { getStampsInfo } from "@/app/lib/CC_Backend/stamps";

const AllCategories = async () => {
  // AKTIVA queries
  // categoryId = 1 --> 'Fruits'
  // categoryId = 4 --> 'Furniture'

  // ICKE AKTIVA queries
  // categoryId = 2 --> 'Fruits'
  // categoryId = 3 --> 'Fruits'

  const response = [
    getStampsInfo('getcategorywithstamps', 'categoryId', 1),
    getStampsInfo('getcategorywithstamps', 'categoryId', 2),
    getStampsInfo('getcategorywithstamps', 'categoryId', 3),
    getStampsInfo('getcategorywithstamps', 'categoryId', 4),
  ];
  // response.map(categoryId => stampCategories('getcategorywithstamps', 'categoryId', categoryId)); 

  const [fruits, noName, noName2, furniture] = await Promise.all(response);
  const stamps: { img: string; category: any }[] = [
    { img: '/chas-challenge/hotdog-stamp.svg', category: fruits },
    { img: '/chas-challenge/banana-stamp.svg', category: noName },
    { img: '/chas-challenge/bear-stamp.svg', category: noName2 },
    { img: '/chas-challenge/flower-stamp.svg', category: furniture }
  ]


  return (
    <div className='flex flex-wrap justify-around gap-8'>
      {stamps.map((stamp) => {
        return (
          <>
            {(stamp.category !== undefined) &&
              <div className="flex flex-col items-center font-bold h-56 w-36">
                <p className="pb-1 text-lg self-start">
                  {stamp.category.title}
                </p>
                <NextStep category={stamp.category} title={stamp.category.title}>
                  <div className="w-5/6 mx-auto mt">
                    <Image src={stamp.img} alt='' height={135} width={106} style={{ width: '100%', height: 'auto' }} />
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
              </div>}
          </>
        )
      })}
    </div>
  )
}

export default AllCategories;
