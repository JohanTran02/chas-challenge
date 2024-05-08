import logo from '@/public/Logo.svg'
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-max flex flex-col px-8 items-center gap-12 relative">
            <div className="w-20 h-20 self-start">
                <div className="h-full w-24">
                    <Image 
                        priority
                        src={logo} 
                        width={50} 
                        height={50} 
                        alt='Application logo' 
                        style={{height: '100%', width: 'auto'}}
                    />
                </div>
            </div>   
            {children}
        </div>
    )
}