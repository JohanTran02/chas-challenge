'use client'; 

// Icons
import HomeIcon from '@/public/home.svg'; 
import MapIcon from '@/public/map-pin-alt.svg'; 
import StampsIcon from '@/public/painting-landscape-framed.svg'; 
import ProfileIcon from '@/public/profile-1336.svg'; 

// Components
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

export default function SideNav(){
  const path = usePathname();
  const links = [
    {name: 'Home', href: '/dashboard', src: HomeIcon, alt: 'Home icon'},
    {name: 'Map', href: '/dashboard/map', src: MapIcon, alt: 'Map icon'}, 
    {name: 'Achievements', href: '/dashboard/achievements', src: StampsIcon, alt: 'Stamps Icon'},
    {name: 'Profile', href: '/dashboard/profile', src: ProfileIcon, alt: 'Profile icon'}
  ]

  return (
    <ul className='h-24 w-full bg-pink-500 flex items-center gap-2 px-4'>    
      {links.map((link) => {
        return (
          <Link 
            key={link.name}
            href={link.href}
            className={`bg-white flex-grow h-10 rounded-md grid place-items-center ${path === link.href && 'bg-blue-200'}`}
            >
            <li>
              <Image 
                rel='icon' 
                height={24}
                width={24}
                src={link.src} alt={link.alt} 
                className="object-cover object-center" 
              />
            </li>
          </Link>
        )
      })}
    </ul>
  )
}


