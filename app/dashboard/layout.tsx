import SideNav from "@/app/ui/dashboard/SideNav"; 

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen w-full flex flex-col-reverse relative">
            <div className="w-full">
                <SideNav />
            </div>  
            <div className="flex-1 absolute inset-0 z-[2]">
                {children}
            </div>
        </div>
    )
}