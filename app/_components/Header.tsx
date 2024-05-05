import {Section} from "@/app/_components/Section";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {GithubIcon} from "@/app/icon/GithubIcon";
import Link from "next/link";
import {LinkedinIcon} from "@/app/icon/LinkedinIcon";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4 bg-background">
            <Section className={"flex items-center"}>
                <div className={"flex-1"}></div>
                <ul className={"flex items-center gap-10 mr-5"}>
                    <Link
                        href={"#me"}
                        className={"hover:text-primary text-xl"}>
                        À propos de moi
                    </Link>
                    <Link
                        href={"#technologies"}
                        className={"hover:text-primary text-xl"}>
                        Technologies
                    </Link>
                    <Link
                        href={"#me"}
                        className={"hover:text-primary text-xl"}>
                        Projets
                    </Link>
                    <ul className={"flex items-center gap-3"}>
                        <Link
                            href={"https://github.com/Galland-Mael"}
                            className={cn(buttonVariants({variant: "outline"}), "size-10 p-0")}>
                            <GithubIcon size={24} className={"text-foreground"}/>
                        </Link>
                        <Link
                            href={"https://www.linkedin.com/in/mael-galland/"}
                            className={cn(buttonVariants({variant: "outline"}), "size-10 p-0")}>
                            <LinkedinIcon size={24} className={"text-foreground"}/>
                        </Link>
                    </ul>
                </ul>
            </Section>
        </header>
    )
}