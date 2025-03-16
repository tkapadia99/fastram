import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Tyler Kapadia",
  description: "Personal portfolio site for Tyler Kapadia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
          <Image 
            src="/TK.png" 
            alt="Hero Background"
            width={100}
            height={100}
            priority
          />
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <Link href="/">
                  <Button variant="ghost" className="text-white font-extrabold lg:text-2xl">Home</Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about">
                  <Button variant="ghost" className="text-white font-extrabold lg:text-2xl">About</Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact">
                  <Button variant="ghost" className="text-white font-extrabold lg:text-2xl">Contact</Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        {children}
      </body>
    </html>
  );
}
