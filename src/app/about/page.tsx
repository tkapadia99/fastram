import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";



export default function About() {

    const workExperiences = [{company: "American Airlines", logo: "aa_logo.png", description:"Software Devloper for 2.5+ years", slug:"aa"},
      {company: "Accenture", logo: "accenture_logo.png", description:"Technology Summer Analyst (Summer 2021)", slug:"acn"},
      {company: "MediaKind", logo: "mediakind_logo.png", description:"Software Devloper for 2+ years while in college", slug:"mk"},
      {company: "TKAP Ventures LLC", logo: "TK.png", description: "LLC I own and work on a variety of projects", slug:"tkap"}
    ]

    const technologies = ["Python", "JavaScript", "Docker", "PostgreSQL", "Databricks", "Azure", "Kubernetes", "NextJS", "Github Actions", "Power BI", "Tableau"]

    return (
      <main>
        <div className="flex flex-wrap gap-8 p-6">
          <Image className="flex-1 max-w-[500px]" src={"/profile.jpeg"} alt={"tyler kapadia"} width={500} height={500}/>
          <div className="flex-1 min-w-[300px]">
            <div className="font-extrabold text-3xl p-4">About Me</div>

            <div className="text-xl p-4">{`I'm a developer based in the Dallas/Fort Worth area. Proud grad of UT Austin, Bachelors in Electrical and Computer Engineering. I've worked on a variety of projects with tons of different technologies!
              In my free time, I love to travel, bake sourdough, and geek out on all things fitness/nutrition. Feel free to read more about my work experiences below`}</div>

            <div className="font-extrabold text-3xl p-4">Technologies</div>

            <div className="flex flex-wrap gap-2">{technologies.map((tech)=><Badge className="px-4 py-2 text-lg" key={tech} variant="outline">{tech}</Badge>) }</div>

          </div>
        </div>
        <div className=""></div>

        <div className="font-extrabold text-3xl p-4">Work Experiences</div>
        <div className="flex flex-wrap gap-4 p-4">

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