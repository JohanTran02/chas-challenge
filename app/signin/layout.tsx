export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen flex flex-col items-center px-6 gap-12 relative bg-neutralWhite">
            {children}
        </div>
    )
}