import { useEffect, useState } from "react";
import ImageHandler from "../../ImageHandler"

type Friend = {
  userID: string;
  username: string;
  stamps: number;
  profilePicture: string;
};

export default function FriendContainer({ showStamps, modalAddFriends }: Partial<{ showStamps: boolean, modalAddFriends: boolean }>) {
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch('users.json');
        const data = await response.json();
        console.log("Fetched friends data:", data);
        setFriends(data.users);
      } catch (error) {
        console.error("Failed to fetch friends:", error);
      }
    };

    fetchFriends();
  }, []);

  const displayedFriends = friends.slice(0, 4);

  return (
    <>
      {displayedFriends.map((friend) => (
        <div className="flex items-center gap-4" key={friend.userID}>
          <ImageHandler image={{
            src: friend.profilePicture,
            alt: friend.username,
            width: 100,
            height: 100,
            className: showStamps ? "size-9 object-cover" : "size-20 object-cover",
          }} />
          <div>
            <h1>{friend.username}</h1>
            {showStamps ? undefined : <h1>{friend.stamps} Stamps</h1>}
          </div>
          {
            modalAddFriends ? <button
              type="button"
              className="text-sm text-neutral-100 bg-darkGreen border-darkGreen text-nowrap px-2 py-2 rounded-3xl border-[1px] font-semibold ml-auto ">
              Lägg till vän
            </button> : undefined
          }
        </div>
      ))}
    </>
  );
}
