import { Card, CardHeader, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function About() {

    const workExperiences = [{company: "American Airlines", logo: "aa_logo.png", description:"Software Devloper for 2.5+ years", slug:"aa"},
      {company: "Accenture", logo: "accenture_logo.png", description:"Technology Summer Analyst (Summer 2021)", slug:"acn"},
      {company: "MediaKind", logo: "mediakind_logo.png", description:"Software Devloper for 2+ years while in college", slug:"mk"}
    ]

    return (
      <main>
        <div className="font-extrabold text-3xl p-4">Work Experience</div>
        <div className="flex gap-4 p-4">

          {workExperiences.map((experience) =>
          <Card className="w-[350px]" key={experience.company}>
          <div className="w-full h-[200px] relative overflow-hidden border rounded-t-md p-4">
            <Image 
              src={`/${experience.logo}`}
              alt={`${experience.company} Logo`}
              fill
              className="object-contain rounded-md" 
              priority
            />
          </div>
          <CardHeader>
            <CardTitle>{experience.company}</CardTitle>
            <CardDescription>{experience.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-end">
            <Link href={`/about/${experience.slug}`}>
              <Button>Read More</Button>
            </Link>
          </CardContent>
        </Card>)}
        </div>
      </main>
    );
}