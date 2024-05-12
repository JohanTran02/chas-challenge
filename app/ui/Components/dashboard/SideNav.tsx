'use client'; 

// Icons
import HomeIcon from '@/public/home-icon.svg'; 
import MapIcon from '@/public/map-icon.svg'; 
import StampsIcon from '@/public/achievements-icon.svg'; 
import ProfileIcon from '@/public/profile-icon.svg'; 

// Components
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function SideNav(){
  const path: string = usePathname();
  const links = [
    {name: 'Home', href: '/dashboard', src: HomeIcon, alt: 'Home icon'},
    {name: 'Achievements', href: '/dashboard/achievements', src: StampsIcon, alt: 'Stamps Icon'},
    {name: 'Map', href: '/dashboard/map', src: MapIcon, alt: 'Map icon'}, 
    {name: 'Profile', href: '/dashboard/profile', src: ProfileIcon, alt: 'Profile icon'}
  ]

  useEffect(() => {
    const body = document.body as HTMLBodyElement; 
    if(path === '/dashboard/map'){
      // This line makes sure that the map covers the whole screen and disables the scrollbar.
      body.scrollIntoView({behavior: 'instant', inline: 'start', block: 'start'});
      body.style.overflowY = 'hidden';
    } 
    if(path !== '/dashboard/map') document.body.style.overflowY = 'auto'; 
    return
  }, [path])

  return (
    <div className={`h-[100px] w-full flex items-start justify-center ${path !== '/dashboard/map' && 'bg-neturalWhite'}`}>
      <ul className='bg-white h-max w-[80%] border-[2px] border-darkGreen rounded-3xl flex items-center px-4 py-[4px] mt-4'>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex-grow h-10 rounded-md grid place-items-center`}
              >
              <li>
                <Image
                  rel='icon'
                  height={32}
                  width={32}
                  src={link.src} alt={link.alt}
                  style={{width: '32px', height: '32px'}}
                  className={`object-cover object-center ${path !== link.href && 'brightness-[250%] grayscale-[60%]'}`}
                />
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

