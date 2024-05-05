import Image from "next/image";
import {Header} from "@/app/_components/Header";
import {Hero} from "@/app/_components/Hero";
import {Spacing} from "@/app/_components/Spacing";
import {TechnologiePart} from "@/app/_components/TechnologiePart";

export default function Home() {
  return (
   <main>
       <Header/>
       <Spacing/>
       <Hero/>
       <Spacing/>
       <TechnologiePart/>
   </main>
  );
}
