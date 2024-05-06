import Image from "next/image";
import {ProjectTitle} from "@/app/_components/Project/ProjectTitle";
import {Spacing} from "@/app/_components/Shared/Spacing";
import React, {ReactNode} from "react";
import Link from "next/link";
import {GithubIcon} from "@/app/icon/GithubIcon";
export interface Project {
    name: string
    description: ReactNode
    image: string
    gitLink: string
    technologies: string[]
}
export  const ProjectCard = (props: Project) => {

    const showTechnologies = props.technologies.map((word, index) => (
        <p key={index} className={"mx-3"}>
                {word}
            </p>
    ));


    return (
        <div className="flex gap-10  max-md:flex-col my-10 w-full h-80 items-center">
            <div className="flex w-7/12 h-full -z-10">
                <div className="w-full h-full">
                    <div className="relative w-full h-full border-4 rounded-md">
                        {props.image === "/myMix.jpg" ? (
                            <Image
                                src={props.image}
                                alt={"Mon portfolio"}
                                fill={true}
                                style={{objectFit: "contain"}}
                            />
                        ) : (
                            <Image
                                src={props.image}
                                alt={"Mon portfolio"}
                                layout="fill"
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className={"flex-1 h-full w-full flex flex-col rounded-md"}>
                <ProjectTitle title={props.name}/>
                <Spacing size={"md"}/>
                <div className="flex h-full w-full justify-center">
                    {props.description}
                </div>
                <div className="h-full items-end flex justify-end">
                    {showTechnologies}
                    <Link
                        href={props.gitLink}
                        className={"size-10 p-1.5 border-2 border-accent rounded-xl"}>
                        <GithubIcon size={24} className={"text-foreground"}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}