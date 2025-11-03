export const HeadingWithLine = ({ headingStyle = 'text-5xl', lineStyle = 'bg-custom-green', title }) => {
    return (
        <div className="w-fit flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <span className={`w-1/6 h-1 rounded-xl ${lineStyle}`} />
                <span className={`w-1 h-1 rounded-full ${lineStyle}`} />
                <span className={`w-1 h-1 rounded-full ${lineStyle}`} />
            </div>
            <h1 className={`${headingStyle} font-semibold`}>{title}</h1>
        </div>
    )
}