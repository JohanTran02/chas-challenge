'use client'

import { usePathname } from 'next/navigation'

// cookies
import { useCookies } from 'react-cookie'
import ImageHandler from '../../ImageHandler';

import GetStarted from '../signin/GetStarted';

// react hook
import { useEffect, useState } from 'react';
import { cookieExpireTime, cookieSettings, isProdPath } from '@/app/lib/definitions';

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken', "displayName"]);
  const [getStarted, setGetStarted] = useState<boolean | null>(null);
  const pathname = usePathname();
  const logo = 'Logo.svg';

  useEffect(() => {
    if (getStarted) {
      const body = document.body as HTMLBodyElement;
      const modal = document.getElementById('getstarted-modal') as HTMLDialogElement;
      body.style.overflow = 'hidden';
      modal.showModal();
    }

    if (getStarted === false) {
      const body = document.body as HTMLBodyElement;
      const modal = document.getElementById('getstarted-modal') as HTMLDialogElement;
      body.style.overflow = 'auto';
      modal.close();
      setGetStarted(null)
    }

  }, [getStarted])
  return (
    <>
      {
        (getStarted || getStarted === false) &&
        <dialog id='getstarted-modal'
          className='m-auto rounded-2xl p-4 outline-none no-scrollbar border-4 border-darkGreen'>
          <GetStarted dispatch={setGetStarted} />
        </dialog>
      }
      <header className={`w-full h-24 ${(pathname === '/chas-challenge' || pathname === "/camera/" || pathname === "/dashboard/map/") ? 'hidden' : ""}`}>
        <div className={`bg-neutralWhite w-full h-full pb-4 flex justify-between items-center px-4 relative z-20 ${pathname === '/dashboard/map' && 'opacity-0 pointer-events-none'}`}>
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
            <div className={`bg-darkGreen grid place-items-center size-8 rounded-full mt-4 self-end ${(pathname === '/signin/') && 'opacity-0'}`}
              onClick={() => { if (pathname !== '/signin/') setGetStarted(true) }}>
              <p className="text-white">i</p>
            </div> :

            <div className="flex flex-col items-center justify-end gap-1 h-full"
              onClick={() => {
                removeCookie('displayName', cookieSettings);
                removeCookie("accessToken", cookieSettings)
              }}
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
    </>
  )
}

export default Header; 
