export const HeadingWithLine = ({ headingStyle = 'text-5xl', lineStyle = 'bg-custom-green', title }) => {
    return (
        <div className="w-fit flex flex-col gap-2.5">
            <span className={`w-1/5 h-1 rounded-xl ${lineStyle}`} />
            <h1 className={`${headingStyle} font-semibold`}>{title}</h1>
        </div>
    )
}