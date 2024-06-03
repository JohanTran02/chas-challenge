'use client';

// Components
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import ImageHandler from '../../ImageHandler';

export default function SideNav() {

  const path: string = usePathname();
  const links = [
    { name: 'Home', href: '/dashboard/', src: 'home-Icon.svg', alt: 'Home icon' },
    { name: 'Achievements', href: '/dashboard/achievements/', src: 'stamps.svg', alt: 'Stamps Icon' },
    { name: 'Map', href: '/dashboard/map/', src: 'map-Icon.svg', alt: 'Map icon' },
    { name: 'Profile', href: '/dashboard/profile/', src: 'profile-Icon.svg', alt: 'Profile icon' }
  ]

  useEffect(() => {
    const body = document.body as HTMLBodyElement;
    if (path === '/dashboard/map/') {
      // This line makes sure that the map covers the whole screen and disables the scrollbar.
      body.scrollIntoView({ behavior: 'instant', inline: 'start', block: 'start' });
      body.style.overflowY = 'hidden';
    }
    if (path !== '/dashboard/map') document.body.style.overflowY = 'auto';
    return
  }, [path])

  return (
    <div className={`h-[80px] w-full max-w-[600px] flex items-start justify-center ${path !== '/dashboard/map/' && 'bg-darkGreen'}`}>
      <ul className='bg-white h-max w-[80%] border-[2px] border-darkGreen rounded-3xl flex items-center px-4 py-[4px] mt-4'>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex-grow h-10 rounded-md grid place-items-center`}
            >
              <li>
                <ImageHandler image={{
                  height: 32,
                  width: 32,
                  src: link.src,
                  alt: link.alt,
                  className: `size-8 object-cover object-center ${path !== link.href && 'brightness-[250%] grayscale-[60%]'}`
                }} />
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}


