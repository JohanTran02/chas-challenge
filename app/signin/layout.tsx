export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-max flex flex-col px-8 items-center gap-12 relative pb-[34px]">
            {children}
        </div>
    )
}