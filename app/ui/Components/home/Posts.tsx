import ImageHandler from '../../ImageHandler';
import StampStats from '../achievements/StampStats';

const Posts = () => {
  const userNames: { name: string; profilePic: string; stamp: { category: string; rarity: string }; }[] = [
    {
      name: 'Lucas Lawson', profilePic: 'profile-dog2.svg', stamp: {
        category: 'IGELKOTT', rarity: 'platinum'
      }
    },
    {
      name: 'Hallie Cortez', profilePic: 'profile-cat.svg', stamp: {
        category: 'STEN', rarity: 'brons'
      }
    },
    {
      name: 'Dale Simmons', profilePic: 'profile-dog.svg', stamp: {
        category: 'STOL', rarity: 'brons'
      }
    },
    {
      name: 'Gertrude Barnett', profilePic: 'profile-beaver.svg', stamp: {
        category: 'BANAN', rarity: 'brons'
      }
    },
    {
      name: 'Gertrude Barnett', profilePic: 'profile-beaver.svg', stamp: {
        category: 'STOL', rarity: 'brons'
      }
    },
  ]

  return (
    <ul className='flex flex-col items-center'>
      {userNames.map((user, index) => {

        return (
          <li key={index}
            className={`bg-neutralWhite flex justify-between gap-1 w-full max-w-[361px] border-darkGreen border-[3px] p-[8px] rounded-xl ${index !== userNames.length - 1 && 'mb-4'} overflow-hidden`}>
            <div className="flex-1 flex gap-3 items-center w-full h-[49px] mt-2">
              <div className="h-[40px] w-[40px] border-darkGreen border-2 rounded-full">
                <ImageHandler image={{
                  src: user.profilePic,
                  alt: 'profile picture',
                  width: 32,
                  height: 32,
                  className: "w-full h-full"
                }} />
              </div>
            </div>
            <div className=" space-y-2 h-full flex-[4] flex-shrink-0 mt-2">
              <p className='font-bold text-sm truncate'>{user.name}</p>
              <div className="">
                <p className="text-xs font-medium truncate ">har samlat ett nytt stamp: {user.stamp.category}</p>
              </div>
              <div className='flex font-extrabold'>
                <StampStats fakeRarity={user.stamp.rarity} />
              </div>
            </div>
            <div className="flex-1 flex-shrink-0 flex flex-col items-center h-full">
              <div className="flex-[3] grid place-items-center h-max w-[75px]">
                <ImageHandler image={{
                  src: "kategori.svg",
                  alt: "An image of a collected stamp",
                  height: 32,
                  width: 32,
                  className: "size-24"
                }} />
              </div>
              <p className="font-bold text-[15px]  text-darkGreen">INTRO</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Posts;
