import React, { useEffect, useState } from "react";
import Image from "next/image";

type Friend = {
  userID: string;
  username: string;
  stamps: number;
  profilePicture: string;
};

export default function FriendContainer() {
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
    <>
      {friends.map((friend) => (
        <div className="flex items-center gap-2 pt-4" key={friend.userID}>
          <Image width={20} height={20} className="w-20 h-20 object-cover" src={friend.profilePicture} alt={friend.username} />
          <div>
            <h1>{friend.username}</h1>
            <h2>{friend.stamps} Stamps</h2>
          </div>
        </div>
      ))}
    </>
  );
}
