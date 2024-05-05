import {Section} from "@/app/_components/Section";
import {TitlePart} from "@/app/_components/TitlePart";
import {TechnologieCard} from "@/app/_components/TechnologieCard";
import {Button} from "@/components/ui/button";
import {Technologie} from "@/app/model/Technologie";
import React from "react";

export const technologieTab: Technologie[] =
    [
        {name: "React", level: "débutant", learnFrom: ["Personnel"]},
        {name: "Angular", level: "intermédiaire", learnFrom: ["Personnel", "Entreprise"]},
        {name: "Elasticsearch", level: "débutant", learnFrom: ["Entreprise"]},
        {name: "Vuejs", level: "débutant", learnFrom: ["BUT", "Personnel"]},
        {name: "Java", level: "intermédiaire", learnFrom: ["BUT", "Entreprise", "Personnel"]},
        {name: "Spring Boot", level: "intermédiaire", learnFrom: ["Personnel", "Entreprise"]}
    ];

export const moreTechnologiesTab: Technologie[] =
    [
        {name: "docker", level: "débutant", learnFrom: ["Personnel"]},
        {name: "Angular", level: "intermédiaire", learnFrom: ["Personnel", "Entreprise"]},
        {name: "Elasticsearch", level: "débutant", learnFrom: ["Entreprise"]},
        {name: "Vuejs", level: "débutant", learnFrom: ["BUT", "Personnel"]},
        {name: "Java", level: "intermédiaire", learnFrom: ["BUT", "Entreprise", "Personnel"]},
        {name: "Spring Boot", level: "intermédiaire", learnFrom: ["Personnel", "Entreprise"]}
    ];

const technologies = technologieTab.map((technologie, index) => (
    <TechnologieCard key={index} technologie={technologie} />
));


export const TechnologiePart = () => {
    return (
        <Section className={"flex max-md:flex-col flex-col items-start"}>
            <TitlePart id={"technologies"} title={"Technologies"}/>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full"}>
                {technologies}
            </div>
            <div className="w-full flex justify-center py-3">
                <Button className={"bg-accent"} variant={"outline"}>Voir plus</Button>
            </div>
        </Section>
    );
}