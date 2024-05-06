'use client';
import {Section} from "@/app/_components/Shared/Section";
import {TitlePart} from "@/app/_components/Shared/TitlePart";
import {TechnologieCard} from "@/app/_components/Technologie/TechnologieCard";
import {Button} from "@/components/ui/button";
import {Technologie} from "@/app/model/Technologie";
import React, {useState} from "react";

const technologieTab: Technologie[] = [
    {name: "Angular", level: "intermédiaire", learnFrom: ["Personnel", "Entreprise"]},
    {name: "Spring Boot", level: "intermédiaire", learnFrom: ["Personnel", "Entreprise"]},
    {name: "Java", level: "intermédiaire", learnFrom: ["BUT", "Entreprise", "Personnel"]},
    {name: "JavaScript/TypeScript", level: "intermédiaire", learnFrom: ["BUT", "Entreprise", "Personnel"]},
    {name: "Elasticsearch", level: "débutant", learnFrom: ["Entreprise"]},
    {name: "React", level: "débutant", learnFrom: ["Personnel"]},

];

const moreTechnologiesTab: Technologie[] = [
    {name: "Docker", level: "débutant", learnFrom: ["Personnel"]},
    {name: "Vuejs", level: "débutant", learnFrom: ["BUT", "Personnel"]}
];

export const TechnologiePart = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMoreClick = () => {
        setShowMore(true);
        technologieTab.push(...moreTechnologiesTab);
    };

    const technologies = technologieTab.map((technologie, index) => (
        <TechnologieCard key={index} technologie={technologie} />
    ));

    return (
        <Section className={"flex max-md:flex-col flex-col items-start"}>
            <TitlePart id={"technologies"} title={"Technologies"} />
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full"}>
                {technologies}
            </div>
            {!showMore && (
                <div className="w-full flex justify-center py-3">
                    <Button className={"bg-accent"} variant={"outline"} onClick={handleShowMoreClick}>Voir plus</Button>
                </div>
            )}
        </Section>
    );
};
