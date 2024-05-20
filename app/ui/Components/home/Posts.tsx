// Stamps
import hotdog_stamp from '/Images/hotdog-stamp.svg'
import banana_stamp from '/Images/banana-stamp.svg'
import bear_stamp from '/Images/bear-stamp.svg'
// profile pics
import dog1 from '/Images/profile-dog.svg'
import dog2 from '/Images/profile-dog2.svg'
import cat from '/Images/profile-cat.svg'
import beaver from '/Images/profile-beaver.svg'

import Image from 'next/image'

const Posts = () => {
  const userNames: { name: string; profilePic: string; stamp: { src: string; category: string }; }[] = [
    { name: 'Lucas Lawson', profilePic: dog2, stamp: { src: hotdog_stamp, category: 'KORV' } },
    { name: 'Hallie Cortez', profilePic: cat, stamp: { src: bear_stamp, category: 'BJÖRN' } },
    { name: 'Dale Simmons', profilePic: dog1, stamp: { src: hotdog_stamp, category: 'KORV' } },
    { name: 'Gertrude Barnett', profilePic: beaver, stamp: { src: banana_stamp, category: 'BANAN' } },
    { name: 'Gertrude Barnett', profilePic: beaver, stamp: { src: bear_stamp, category: 'BJÖRN' } },
  ]

  return (
    <ul>
      {userNames.map((user, index) => {

        return (
          <li key={index}
            className="flex w-full h-36 border-darkGreen border-[3px] mb-4 p-[8px] rounded-md">
            <div className=" flex flex-col justify-between h-full flex-grow flex-shrink-0">
              <div className="flex gap-3 items-center w-full h-[49px]">
                <div className="h-[45px] w-[45px]">
                  <Image src={user.profilePic} alt='profile picture' width={41} height={41} style={{ height: '100%', width: '100%' }} />
                </div>
                <p className='font-bold text-sm truncate'>{user.name}</p>
              </div>
              <div className="">
                <p className="text-xs font-medium truncate ">1 nytt stamp från kategorin: {user.stamp.category}</p>
              </div>
              <div className="w-full h-max font-semibold mt-2">
                <p className=" inline-block">Gilla</p>
                <p className=" inline-block w-max ml-8">Kommentera</p>
              </div>
            </div>
            <div className="flex-grow flex-shrink-0 grid place-items-center h-full">
              <Image src={user.stamp.src} alt='An image of a collected stamp' width={100} height={100} style={{ height: 'auto', width: 'auto' }} />
              <p className="font-semibold mt-2">KATEGORI</p>
            </div>
          </li>

        )

      })}
    </ul>
  )
}

export default Posts;
