'use client';

interface TitleProps {
    title: string
}

export const ProjectTitle = (props: TitleProps) => {
    return (
        <div className="flex items-center">
            <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
            <div>
                <h2 className="text-4xl">{props.title}</h2>
            </div>
            <div className="h-3 lg:h-6"></div>
            <div className="h-8 lg:h-16"></div>
        </div>
    )
}

