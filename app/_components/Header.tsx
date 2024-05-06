import {GithubIcon} from "@/app/icon/GithubIcon";
import Link from "next/link";
import {LinkedinIcon} from "@/app/icon/LinkedinIcon";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4" style={{ background: 'hsl(224 71.4% 4.1%)' }}>
            <section className={"flex items-center max-w-5xl px-4 m-auto"}>
                <div className={"flex-1"}></div>
                <ul className={"flex items-center gap-10 mr-5"}>
                    <Link
                        href={"#about-me"}
                        className={"hover:text-primary text-xl"}>
                        À propos de moi
                    </Link>
                    <Link
                        href={"#technologies"}
                        className={"hover:text-primary text-xl"}>
                        Technologies
                    </Link>
                    <Link
                        href={"#projet"}
                        className={"hover:text-primary text-xl"}>
                        Projets
                    </Link>
                    <Link
                        href={"#contact"}
                        className={"hover:text-primary text-xl"}>
                        Contact
                    </Link>
                    <ul className={"flex items-center gap-3"}>
                        <Link
                            href={"https://github.com/Galland-Mael"}
                            className={"size-10 p-1.5 border-2 border-accent rounded-xl"}>
                            <GithubIcon size={24} className={"text-foreground"}/>
                        </Link>
                        <Link
                            href={"https://www.linkedin.com/in/mael-galland/"}
                            className={"size-10 p-1.5 border-2 border-accent rounded-xl"}>
                            <LinkedinIcon size={24} className={"text-foreground"}/>
                        </Link>
                    </ul>
                </ul>
            </section>
        </header>
    )
}