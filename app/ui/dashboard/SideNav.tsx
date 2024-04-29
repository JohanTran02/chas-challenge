
export default function SideNav(){
  return (
    <ul className='h-24 w-full bg-pink-500 flex items-center gap-2 px-4'>
      <li className="bg-white flex-grow h-10 rounded-md grid place-items-center">
        <img className="h-6 w-6 object-cover object-center" src="https://www.svgrepo.com/show/487452/home.svg" alt="" />
        </li>
      <li className="bg-white flex-grow h-10 rounded-md grid place-items-center">
        <img className="h-6 w-6 object-cover object-center" src="https://www.svgrepo.com/show/532548/map-pin-alt.svg" alt="" />
        </li>
      <li className="bg-white flex-grow h-10 rounded-md grid place-items-center">
        <img className="h-6 w-6 object-cover object-center" src="https://www.svgrepo.com/show/28371/painting-landscape-framed.svg" alt="" />
        </li>
      <li className="bg-white flex-grow h-10 rounded-md grid place-items-center">
        <img className="h-6 w-6 object-cover object-center" src="https://www.svgrepo.com/show/512692/profile-1336.svg" alt="" />
      </li>
    </ul>
  )
}


