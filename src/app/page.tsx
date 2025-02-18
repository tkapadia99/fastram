import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
        <div className="flex justify-center items-center">
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <img src="/profile.jpeg" alt="Profile Photo" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center w-full text-white p-4">
          <h1 className="text-4xl font-bold text-black text-center">Welcome to My Portfolio</h1>
          <p className="mt-4 text-lg">A showcase of my work and experience.</p>
          <div className="mt-6 flex gap-4">
            <Link href="/about">
              <Button>About Me</Button>
            </Link>
            <Link href="/contact">
              <Button>Contact</Button>
            </Link>
          </div>
        </div>
      </main>
  );
}
