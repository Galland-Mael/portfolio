import {TitlePart} from "@/app/_components/Shared/TitlePart";
import {Section} from "@/app/_components/Shared/Section";
import {ProjectData} from "@/app/_components/Project/ProjectData";

export const ProjectPart = () => {
    return (
        <Section className={"flex max-md:flex-col flex-col items-start"}>
            <TitlePart title={"Projets"} id={"projet"}/>
            <ProjectData />
        </Section>
    )
}