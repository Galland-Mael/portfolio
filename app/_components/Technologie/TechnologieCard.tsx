import {Technologie} from "@/app/model/Technologie";
import {ReactIcon} from "@/app/icon/ReactIcon";
import {AngularIcon} from "@/app/icon/AngularIcon";
import React from "react";
import {SpringBootIcon} from "@/app/icon/SpringBootIcon";
import {ElasticSearchIcon} from "@/app/icon/ElasticSearchIcon";
import {VueIcon} from "@/app/icon/VueIcon";
import {JavaIcon} from "@/app/icon/JavaIcon";
import {DockerIcon} from "@/app/icon/DockerIcon";
import {JavascriptAndTypeScriptIcon} from "@/app/icon/JavascriptAndTypeScriptIcon";

export const TechnologieCard = ({technologie}: { technologie: Technologie }) => {
    const colorWord = (word: string) => {
        switch(word) {
            case "Personnel":
                return "text-blue-500";
            case "Entreprise":
                return "text-purple-500";
            case "BUT":
                return "text-green-500";
            default:
                return "";
        }
    };

    const showLearnFrom = technologie.learnFrom.map((word, index) => (
        <span key={index} className={`${colorWord(word)} mx-1`}>
        {word}
    </span>
    ));

    const showIcon = (name: string) => {
        switch(name) {
            case "JavaScript/TypeScript":
                return <JavascriptAndTypeScriptIcon size={64} />
            case "Docker":
                return <DockerIcon size={64}/>;
            case "React":
                return <ReactIcon size={64}/>;
            case "Angular":
                return <AngularIcon size={64}/>;
            case "Spring Boot":
                return <SpringBootIcon size={64}/>;
            case "Elasticsearch":
                return <ElasticSearchIcon size={64}/>;
            case "Vuejs":
                return <VueIcon size={64}/>;
            case "Java":
                return <JavaIcon size={64}/>;
            default:
                return "";
        }
    }
    return (
        <div className={"flex flex-col items-center bg-accent p-4 rounded-xl w-full"}>
            {showIcon(technologie.name)}
            <h3 className={"text-2xl my-1"}>{technologie.name}</h3>
            <h4 className={"my-1"}> Niveau {technologie.level}</h4>
            <div className={"flex"}>
                {showLearnFrom}
            </div>
        </div>
    )
}