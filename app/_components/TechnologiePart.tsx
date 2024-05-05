import {Section} from "@/app/_components/Section";
import {TitlePart} from "@/app/_components/TitlePart";
import {TechnologieCard} from "@/app/_components/TechnologieCard";
import {Spacing} from "@/app/_components/Spacing";
import {Button} from "@/components/ui/button";

export const TechnologiePart = () => {
    return (
        <Section className={"flex max-md:flex-col flex-col items-start"}>
            <TitlePart title={"Technologies"}/>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full"}>
                <TechnologieCard technologie={{
                    name: "Spring Boot",
                    level: "intermédiaire",
                    learnFrom: ["Personnel", "Entreprise"]
                }}/>
                <TechnologieCard technologie={{name: "React", level: "débutant", learnFrom: ["Personnel"]}}/>
                <TechnologieCard
                    technologie={{name: "Angular", level: "intermédiaire", learnFrom: ["Personnel", "Entreprise"]}}/>
                <TechnologieCard
                    technologie={{name: "Elasticsearch", level: "débutant", learnFrom: ["Entreprise"]}}/>
                <TechnologieCard
                    technologie={{name: "Vuejs", level: "débutant", learnFrom: ["BUT", "Personnel"]}}/>
                <TechnologieCard
                    technologie={{
                        name: "Java",
                        level: "intermédiaire",
                        learnFrom: ["BUT", "Entreprise", "Personnel"]
                    }}/>
            </div>
            <div className="w-full flex justify-center py-3">
                <Button className={"bg-accent"} variant={"outline"}>Voir plus</Button>
            </div>

        </Section>
    );
}