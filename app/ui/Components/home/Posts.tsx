import Image from 'next/image'

const Posts = () => {
  const userNames: { name: string; profilePic: string; stamp: { src: string; category: string }; }[] = [
    { name: 'Lucas Lawson', profilePic: '/Images/profile-dog2.svg', stamp: { src: '/Images/hotdog-stamp.svg', category: 'KORV' } },
    { name: 'Hallie Cortez', profilePic: '/Images/profile-cat.svg', stamp: { src: '/Images/bear-stamp.svg', category: 'BJÖRN' } },
    { name: 'Dale Simmons', profilePic: '/Images/profile-dog.svg', stamp: { src: '/Images/hotdog-stamp.svg', category: 'KORV' } },
    { name: 'Gertrude Barnett', profilePic: '/Images/profile-beaver.svg', stamp: { src: '/Images/banana-stamp.svg', category: 'BANAN' } },
    { name: 'Gertrude Barnett', profilePic: '/Images/profile-beaver.svg', stamp: { src: '/Images/bear-stamp.svg', category: 'BJÖRN' } },
  ]

  return (
    <ul className='flex flex-col items-center'>
      {userNames.map((user, index) => {

        return (
          <li key={index}
            className={`bg-neutralWhite flex justify-between gap-2 w-full max-w-[361px] h-36 border-darkGreen border-[3px] p-[8px] rounded-xl ${index !== userNames.length - 1 && 'mb-4'} overflow-hidden`}>
            <div className="flex gap-3 items-center w-full h-[49px] mt-2">
                <div className="h-[40px] w-[40px] border-darkGreen border-2 rounded-full">
                  <Image src={user.profilePic} alt='profile picture' width={41} height={41} style={{ height: '100%', width: '100%' }} />
                </div>
            </div>
            <div className=" space-y-2 h-full flex-grow flex-shrink-0 mt-2">
              <p className='font-bold text-sm truncate'>{user.name}</p>
              <div className="">
                <p className="text-xs font-medium truncate ">har samlat ett nytt stamp: {user.stamp.category}</p>
              </div>
              <div className="flex font-extrabold">
                <div className="flex-1 border-r-[1px] border-gray-400 flex flex-col items-center gap-1">
                  <Image src='/Images/dollar.svg' height={35} width={35} alt='' className='size-4' />
                  <p className='text-[12px] text-darkGreen'>GULD</p>
                </div>
                <div className="flex-1 border-r-[1px] border-gray-400 flex flex-col items-center gap-1">
                  <Image src='/Images/Percentage.svg' height={35} width={35} alt='' className='size-4' />
                  <p className='text-[12px] text-darkGreen'>0,5</p>
                </div>
                <div className="flex-1  flex flex-col items-center gap-1">
                  <Image src='/Images/map-mission.svg' height={35} width={35} alt='' className='size-4' />
                  <p className='text-[12px] text-darkGreen'>
                    PLATS
                  </p>
                </div>
              </div>
              {/* <div className="w-full h-max font-semibold mt-2">
                <p className=" inline-block">Gilla</p>
                <p className=" inline-block w-max ml-8">Kommentera</p>
              </div> */}
            </div>
            <div className="flex-grow flex-shrink-0 flex flex-col items-center gap-6 h-full">
              <Image src={user.stamp.src} alt='An image of a collected stamp' width={70} height={70} style={{ height: 'auto', width: '85%'/* , marginTop: '10px'  */}} />
              <p className="font-bold text-[15px]  text-darkGreen">KATEGORI</p>
            </div>
          </li>

        )

      })}
    </ul>
  )
}

export default Posts;
