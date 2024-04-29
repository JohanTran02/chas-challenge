import SideNav from "../ui/dashboard/SideNav"; 

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full w-full flex flex-col-reverse">
            <div className="w-full">
                <SideNav />
            </div>  
            <div className="flex-1 grid place-items-center">{children}</div>
        </div>
    )
}