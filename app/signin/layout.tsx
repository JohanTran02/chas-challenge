export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-max flex flex-col items-center px-4 gap-12 relative ">
            {children}
        </div>
    )
}