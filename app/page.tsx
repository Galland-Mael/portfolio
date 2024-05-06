import {Header} from "@/app/_components/Header";
import {Hero} from "@/app/_components/Hero";
import {TechnologiePart} from "@/app/_components/Technologie/TechnologiePart";
import {ProjectPart} from "@/app/_components/Project/ProjectPart";
import {Contact} from "@/app/_components/Contact";

export default function Home() {
  return (
   <main>
       <Header/>
       <Hero/>
       <TechnologiePart/>
       <ProjectPart/>
       <Contact/>
   </main>
  );
}
