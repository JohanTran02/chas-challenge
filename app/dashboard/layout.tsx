import SideNav from "@/app/ui/Components/dashboard/SideNav"; 

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full w-full relative flex flex-col-reverse">
            <div className="w-full fixed bottom-0 z-10">
                <SideNav />
            </div>  
            <div className="bg-darkGreen pb-[100px]"
                style={{height: 'calc(100vh - (100px + 53px))'}}>
                {children}
            </div>
        </div>
    )
}