
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full" 
      style={{height: 'calc(100vh - 210px)'}}>{children}</div>
  )
}