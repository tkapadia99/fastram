import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./globals.css";
import Link from "next/link";
import { Download } from "lucide-react"

export default function Home() {
  return (
    <main className="relative w-screen h-screen">
        <div className="flex justify-center items-center pt-[50]">
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <img src="/profile.jpeg" alt="Profile Photo" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center w-full text-white p-4 pt-[50]">
          <h1 className="text-4xl font-bold text-black text-center max-w-md">Hi, I'm Tyler Kapadia! Welcome to my portfolio site</h1>
          <p className="mt-4 text-lg">A showcase of my work and experience.</p>
          <div className="mt-6 flex gap-4 flex-wrap">
            <a href="/resume.pdf" download className="flex items-center">
              <Button variant="default" className="flex font-extrabold">
                <Download size={16} />
                Download Resume
              </Button>
            </a>
            <Link href="/about">
              <Button className="font-extrabold">About Me</Button>
            </Link>
            <Link href="/contact">
              <Button className="font-extrabold">Contact</Button>
            </Link>
            <Link href="/contact">
              <Button className="font-extrabold">Test1</Button>
            </Link>
            <Link href="/contact">
              <Button className="font-extrabold">Test2</Button>
            </Link>
          </div>
        </div>
      </main>
  );
}
