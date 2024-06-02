import React, { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ImageHandler from '../../ImageHandler';

type Friend = {
  userID: string;
  username: string;
  stamps: number;
  profilePicture: string;
};

export default function AddFriendsModalContent({ onClose }: { onClose: () => void }) {
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch('/users.json');
        const data = await response.json();
        console.log("Fetched friends data:", data);
        setFriends(data.users);
      } catch (error) {
        console.error("Failed to fetch friends:", error);
      }
    };

    fetchFriends();
  }, []);

  return (
    <div className="w-full relative">
      <XMarkIcon className="absolute top-1 right-1 w-8 cursor-pointer" onClick={onClose} />
      <div className='flex flex-col gap-5 p-4 h-[70vh]'>
        <div className='grid gap-4 overflow-scroll no-scrollbar'>
          <div className='grid gap-2'>
            <h2>Användare</h2>
            <div className="pt-6 pb-8 mx-auto text-gray-600">
              <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Sök bland användare"></input>
            </div>
            <div className='flex flex-col mt-auto gap-6 pl-2'>
              {friends.map((friend) => (
                <div className='flex items-center justify-between gap-2 pt-4' key={friend.userID}>
                  <div className="flex items-center gap-2">
                    <ImageHandler image={{
                      src: friend.profilePicture,
                      alt: friend.username,
                      width: 0,
                      height: 0,
                      className: "w-20 h-20 object-cover",
                    }} />
                    <div>
                      <h1>{friend.username}</h1>
                      <h2>{friend.stamps} Stamps</h2>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-neutral-100 bg-darkGreen text-nowrap px-8 py-3 rounded-3xl border-[1px] border-darkGreen text-l font-semibold">
                    {"Add"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
