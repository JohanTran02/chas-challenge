import './ui/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className='w-screen min-h-screen h-auto overflow-x-hidden'>
          {children}
      </body>
    </html>
  );
}
