import {TitlePart} from "@/app/_components/Shared/TitlePart";
import React from "react";
import {Section} from "@/app/_components/Shared/Section";
import {MailIcon} from "@/app/icon/MailIcon";
import {PhoneIcon} from "@/app/icon/PhoneIcon";
import {GithubIcon} from "@/app/icon/GithubIcon";
import {LinkedinIcon} from "@/app/icon/LinkedinIcon";
import Link from "next/link";
import {Spacing} from "@/app/_components/Shared/Spacing";

export const Contact = () => {
    return (
        <Section className={"flex max-md:flex-col flex-col items-start"}>
            <TitlePart title={"Contact"} id={"contact"}/>
            <div className="mt-4 w-full flex flex-col md:flex-row">
                <div className="flex flex-col">
                <div className="flex flex-row items-center my-1">
                    <MailIcon size={24} className={"text-primary mx-3"}/>
                    <p className="font-semibold">maelgalland.71@mail.com</p>
                </div>
                <div className="flex flex-row items-center my-1">
                    <PhoneIcon size={24} className={"text-primary mx-3"}/>
                    <p className="font-semibold">06 52 53 23 52</p>
                </div>
                </div>
                <div className="mt-4 md:ml-auto flex flex-row items-center">
                    <Link href={"https://github.com/Galland-Mael"}
                          className={"size-10 p-1.5 border-2 border-accent rounded-xl mx-1"}>
                        <GithubIcon size={24} className={"text-foreground"}/>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/mael-galland/"}
                          className={"size-10 p-1.5 border-2 border-accent rounded-xl mx-1"}>
                        <LinkedinIcon size={24} className={"text-foreground"}/>
                    </Link>
                </div>
            </div>
            <Spacing/>
        </Section>

    )
}