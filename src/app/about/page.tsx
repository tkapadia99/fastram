import { Card, CardHeader, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function About() {
    return (
      <main>
        <div className="font-extrabold text-2xl p-4">Work Experience</div>
        <div className="flex gap-4 p-4">
          <Card className="w-[350px]">
            <div className="w-full h-[200px] relative overflow-hidden">
              <Image 
                src="/aa_logo.png" 
                alt="American Airlines Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <CardHeader>
              <CardTitle>American Airlines</CardTitle>
              <CardDescription>Currently a Software Devloper for 2.5+ years</CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-[350px]">
            <div className="w-full h-[200px] relative overflow-hidden">
              <Image 
                src="/accenture_logo.png" 
                alt="American Airlines Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <CardHeader>
              <CardTitle>Accenture</CardTitle>
              <CardDescription>Technology Summer Analyst (Summer 2021)</CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-[350px]">
          <div className="w-full h-[200px] relative overflow-hidden">
              <Image 
                src="/mediakind_logo.png" 
                alt="American Airlines Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <CardHeader>
              <CardTitle>Software Developer</CardTitle>
              <CardDescription>Software Devloper for 2+ years while in college</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
    );
}