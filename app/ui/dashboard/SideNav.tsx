'use client'; 

// Icons
import HomeIcon from '@/public/home-filled.svg'; 
import MapIcon from '@/public/Map Marker.svg'; 
import StampsIcon from '@/public/Trophy.svg'; 
import ProfileIcon from '@/public/Customer.svg'; 

// Components
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

export default function SideNav(){
  const path = usePathname();
  const links = [
    {name: 'Home', href: '/dashboard', src: HomeIcon, alt: 'Home icon'},
    {name: 'Achievements', href: '/dashboard/achievements', src: StampsIcon, alt: 'Stamps Icon'},
    {name: 'Map', href: '/dashboard/map', src: MapIcon, alt: 'Map icon'}, 
    {name: 'Profile', href: '/dashboard/profile', src: ProfileIcon, alt: 'Profile icon'}
  ]

  return (
    <div className='h-max w-full flex items-start justify-center pb-10 absolute bottom-0 z-10'>
      <ul className='bg-white h-max w-5/6 border-[1px] border-black rounded-3xl flex items-center gap-2 px-4 '>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={` flex-grow h-10 rounded-md grid place-items-center ${/* path === link.href && 'bg-blue-200' */''}`}
              >
              <li>
                <Image
                  rel='icon'
                  height={32}
                  width={32}
                  src={link.src} alt={link.alt}
                  className="object-cover object-center"
                />
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}


