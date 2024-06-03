
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full overflow-y-auto pb-[30px]">{children}</div>
  )
}