import { XMarkIcon } from '@heroicons/react/24/outline';
import FriendContainer from './FriendContainer';
export default function AddFriendsModalContent({ onClose, modalAddFriends }: { onClose: () => void, modalAddFriends: boolean }) {

  return (
    <div className="w-full relative">
      <XMarkIcon className="absolute top-4 right-2 w-8 cursor-pointer" onClick={onClose} />
      <div className='flex flex-col gap-5 p-4 h-[73vh]'>
        <div className='grid gap-4 overflow-scroll no-scrollbar'>
          <div className='grid gap-2'>
            <h2>Användare</h2>
            <div className="pt-6 pb-8 mx-auto text-gray-600">
              <input className="border-2 border-gray-300 bg-neutralWhite h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Sök bland användare"></input>
            </div>
            <div className='flex flex-col mt-auto gap-6 pl-2'>
              <FriendContainer modalAddFriends={modalAddFriends} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
