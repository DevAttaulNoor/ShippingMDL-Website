import { HeadingWithLine } from "./HeadingWithLine"

export const HeadingWithDescription = ({ containerStyle = '', heading, description }) => {
    return (
        <div className={`${containerStyle} flex flex-col items-center justify-center text-center gap-1.5`}>
            <HeadingWithLine
                title={heading.title}
                headingStyle={heading.headingStyle}
                lineStyle={heading.headingLineStyle}
            />

            <h5 className="descriptionStyle">{description}</h5>
        </div>
    )
}