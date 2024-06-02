import './ui/globals.css';
import Header from "@/app/ui/Components/header/Header";
import { inter } from '../public/fonts';
import AuthProvider from './ui/AuthProvider';
import StoreProvider from "./lib/redux/StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en" className='no-scrollbar'>
        <body className={`bg-[#f6f5ef] w-screen min-h-screen mx-auto flex flex-col h-auto overflow-x-hidden max-w-[600px] pb-[34px] relative ${inter.className}`}>
          <AuthProvider>
            <Header />
            <main>{children}</main>
          </AuthProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
