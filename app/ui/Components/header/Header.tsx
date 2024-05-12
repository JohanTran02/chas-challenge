'use client'

import Image from 'next/image'
import logo from '@/public/Logo.svg'
import { usePathname } from 'next/navigation'

const Header = () => {
  const currentPath = usePathname(); 
  return (
    <header className={`w-screen h-20 ${currentPath !== '/dashboard/map' && 'mb-6'} ${currentPath === '/' && 'hidden'}`}>
      <div className={`bg-neturalWhite w-full h-20 flex justify-between items-center px-4 relative z-20 ${currentPath === '/dashboard/map' && 'opacity-0 pointer-events-none'}`}>
          <Image 
              priority
              src={logo} 
              width={50} 
              height={50} 
              alt='Application logo' 
              style={{height: '100%', width: 'auto'}}
          />
          <div className="bg-darkGreen grid place-items-center w-8 h-8 rounded-full mt-4">
              <p className="text-white">i</p>
          </div>
      </div>
    </header>
  )
}

export default Header; 