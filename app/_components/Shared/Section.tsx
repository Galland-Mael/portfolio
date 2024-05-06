import {PropsWithChildren} from "react";

export const Section = (props: PropsWithChildren<{className?: string}>) => {
    return (
        <section className={"max-w-5xl px-4 m-auto"}>
            {props.children}
        </section>
    )
}