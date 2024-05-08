import { poppins } from './ui/fonts';
import './ui/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-[#f6f5ef] w-screen min-h-screen h-auto overflow-x-hidden py-[54px] pb-[34px] ${poppins.className} py-`}>
        {children}
      </body>
    </html>
  );
}
