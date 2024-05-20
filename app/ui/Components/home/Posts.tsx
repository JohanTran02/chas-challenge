// Stamps
// import hotdog_stamp from '/chas-challenge/hotdog-stamp.svg',
// import banana_stamp from '/chas-challenge/banana-stamp.svg',
// import bear_stamp from '/chas-challenge/bear-stamp.svg',
// profile pics
// import dog1 from '/chas-challenge/profile-dog.svg',
// import dog2 from '/chas-challenge/profile-dog2.svg',
// import cat from '/chas-challenge/profile-cat.svg',
// import beaver from '/chas-challenge/profile-beaver.svg',

import Image from 'next/image'

const Posts = () => {
  const userNames: { name: string; profilePic: string; stamp: { src: string; category: string }; }[] = [
    { name: 'Lucas Lawson', profilePic: '/profile-dog2.svg', stamp: { src: '/hotdog-stamp.svg', category: 'KORV' } },
    { name: 'Hallie Cortez', profilePic: '/profile-cat.svg', stamp: { src: '/bear-stamp.svg', category: 'BJÖRN' } },
    { name: 'Dale Simmons', profilePic: '/profile-dog.svg', stamp: { src: '/hotdog-stamp.svg', category: 'KORV' } },
    { name: 'Gertrude Barnett', profilePic: '/profile-beaver.svg', stamp: { src: '/banana-stamp.svg', category: 'BANAN' } },
    { name: 'Gertrude Barnett', profilePic: '/profile-beaver.svg', stamp: { src: '/bear-stamp.svg', category: 'BJÖRN' } },
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
