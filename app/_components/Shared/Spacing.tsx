export type SpacingProps = {
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

export const Spacing = ({size = "md"}: SpacingProps) => {
    return (
        <div
            className={
                size === "xxs" ? "h-2 lg:h-4" :
                    size === "xs" ? "h-4 lg:h-8" :
                        size === "sm" ? "h-8 lg:h-16" :
                            size === "md" ? "h-16 lg:h-24" :
                                size === "lg" ? "h-24 lg:h-32" :
                                    size === "xl" ? "h-32 lg:h-40" :
                                        "h-40 lg:h-48"
            }
        />
    )
}