import css from "styled-jsx/css";
import {cn} from "@/lib/utils";
export type SpacingProps = {
     size?: "xxs" |"xs" | "sm" | "md" | "lg" | "xl" | "2xl" ;
}

export const Spacing = ({ size = "md"}: SpacingProps) => {
    return (
        <div
            className={cn({
                "h-2 lg:h-4": size === "xxs",
                "h-4 lg:h-8": size === "xs",
                "h-8 lg:h-16": size === "sm",
                "h-16 lg:h-24": size === "md",
                "h-24 lg:h-32": size === "lg",
                "h-32 lg:h-40": size === "xl",
                "h-40 lg:h-48": size === "2xl",
            })}
        />
    )
}