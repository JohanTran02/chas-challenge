'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {
  const currentPath = usePathname();
  const logo = '/Images/Logo.svg';
  return (
    <header className={`w-full h-24 ${currentPath === '/' || currentPath === "/camera" || currentPath === "/dashboard/map" && 'hidden'}`}>
      <div className={`bg-neturalWhite w-full h-20 flex justify-between items-center px-4 relative z-20 ${currentPath === '/dashboard/map' && 'opacity-0 pointer-events-none'}`}>
        <Image
          priority
          src={logo}
          width={50}
          height={50}
          alt='Application logo'
          style={{ height: '60%', width: 'auto' }}
        />
        <div className="bg-darkGreen grid place-items-center w-8 h-8 rounded-full mt-4">
          <p className="text-white">i</p>
        </div>
      </div>
    </header>
  )
}

export default Header; 
