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
    <ul>
      {userNames.map((user, index) => {

        return (
          <li key={index}
            className={`flex w-full h-36 border-darkGreen border-[3px] p-[8px] rounded-md ${index !== userNames.length - 1 && 'mb-4'}`}>
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
