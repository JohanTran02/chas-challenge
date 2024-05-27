import './ui/globals.css';
import StoreProvider from "./StoreProvider";
import Header from "@/app/ui/Components/header/Header";
import { inter } from '../public/fonts';
import { CookiesProvider } from 'react-cookie';
// import Authentication from "./ui/Components/Authentication";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CookiesProvider>
      <StoreProvider>
        <html lang="en">
          <body className={`bg-[#f6f5ef] w-screen min-h-screen mx-auto flex flex-col justify-center h-auto overflow-x-hidden max-w-[600px] pb-[34px] relative ${inter.className}`}>
            <Header />
            <main>{children}</main>
          </body>
        </html>
      </StoreProvider>
    </CookiesProvider>
  );
}
