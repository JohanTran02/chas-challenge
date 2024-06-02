'use client'

import { usePathname } from 'next/navigation'

// cookies
import { useCookies } from 'react-cookie'
import ImageHandler from '../../ImageHandler';

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
  const pathname = usePathname();
  const logo = 'Logo.svg';

  return (
    <header className={`w-full h-24 ${(pathname === '/chas-challenge' || pathname === "/camera/" || pathname === "/dashboard/map/") && 'hidden'}`}>
      <div className={`bg-neturalWhite w-full h-20 flex justify-between items-center px-4 relative z-20 ${pathname === '/dashboard/map' && 'opacity-0 pointer-events-none'}`}>
        <ImageHandler image={{
          priority: true,
          src: logo,
          width: 50,
          height: 50,
          alt: 'Application logo',
          style: { height: '65%', width: 'auto', alignSelf: 'flex-end', marginBottom: '2px' },
        }}

        />
        {pathname !== '/dashboard/profile/' ?
          <div className={`bg-darkGreen grid place-items-center size-8 rounded-full mt-4 self-end ${(pathname === '/signin/') && 'opacity-0'}`}>
            <p className="text-white">i</p>
          </div> :

          <div className="flex flex-col items-center justify-end gap-1 h-full"
            onClick={() => removeCookie('accessToken', { path: '/', domain: 'localhost' })}
          >
            <ImageHandler image={{
              priority: true,
              src: 'settings.svg',
              width: 50,
              height: 50,
              alt: 'Application logo',
              className: 'size-6',
            }} />

            <p className='text-darkGreen underline text-[12px] font-bold'>
              Logga ut
            </p>
          </div>
        }
      </div>
    </header>
  )
}

export default Header; 
