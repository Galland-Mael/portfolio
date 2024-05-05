import {Section} from "@/app/_components/Section";
import {Spacing} from "@/app/_components/Spacing";
import {TitlePart} from "@/app/_components/TitlePart";

export const Hero = () => {
    return (
        <Section className={"flex max-md:flex-col flex-col items-start"}>
            <div className={"flex items-center my-3"}>
                <img
                    className={"w-16 h-16  max-w-sm rounded-full border-2 border-accent mx-3"}
                    src="https://media.licdn.com/dms/image/D4E03AQE2j3mFR1HG2A/profile-displayphoto-shrink_200_200/0/1707724929987?e=1720656000&v=beta&t=-cu2cdJxQpqPJLFslf6OOEwCGHTy8j535uIa6aMRouA"
                    alt="Maël galland"/>
                <h2 className={"font-caption fl text-5xl items-center justify-center pt-3"}>Maël Galland</h2>
            </div>
            <div>
                <h3 className={"font-caption text-2xl italic ms-3"}>Développeur full stack</h3>
                <p className={"ms-3"}>
                    Alternant développeur web full stack chez
                    <span className="text-primary"> AXOPEN</span>
                </p>
                <Spacing size={"xl"}/>
                <TitlePart id={"me"} title={"À propos de moi"}/>
                <p>
                    Hello, moi c'est Maël 👋, je suis un jeune développeur informatique.
                    J'ai découvert cette passion pour le
                    <span className="text-primary"> développement web </span>
                    et toutes ces
                    <span className="text-primary"> technologies </span> très jeune.
                </p>
                <Spacing size={"xxs"}/>
                <p>
                    En tant que personne
                    <span className="text-primary"> curieuse </span>
                    , j'aime apprendre et découvrir de nouvelles
                    choses. Le développement web est le domaine parfait pour moi.
                    Il me reste encore énormément de choses à apprendre et c'est ce qui me motive à
                    <span className="text-primary"> m'améliorer </span>
                    de jour en jour.
                </p>
            </div>
        </Section>
    )
}