import { Inter } from "next/font/google";
import "./globals.css";

import Menu from "@/components/menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Js x GSAP Responsive Navigation",
  description: "by shahdin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
