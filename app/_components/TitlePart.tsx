import {Spacing} from "@/app/_components/Spacing";

interface TitleProps {
    title: string
}
export const TitlePart = (props: TitleProps) => {
    return (
        <div>
            <div className="relative">
                <h2 className={"text-4xl"}>{props.title}</h2>
                <div className={"h-3 lg:h-6"}></div>
                <div className="absolute left-0 bottom-0 h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <div className={"h-8 lg:h-16"}></div>
        </div>
    )
}