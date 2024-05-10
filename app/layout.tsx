import Header from "@/app/ui/Header";
import { inter } from './ui/fonts';
import './ui/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-[#f6f5ef] w-screen min-h-screen h-auto overflow-x-hidden pt-[53px] relative ${inter.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
