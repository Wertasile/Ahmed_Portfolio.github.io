import localFont from "next/font/local";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import "../styles/globals.css";

import { Roboto } from 'next/font/google'
import { Josefin_Sans } from "next/font/google";
import Uppermenu from "../components/Uppermenu";
import CustomCursor from "../components/Customcursor";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const josefinsans = Josefin_Sans({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en" className="!scroll-smooth">
        <body suppressContentEditableWarning={true}
          className={josefinsans.className}
        >
          {/* <CustomCursor/> */}
          <Uppermenu/>
          {children}
        </body>
      
    </html>
    </>
  );
}
