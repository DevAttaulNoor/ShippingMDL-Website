import { AnimatedBtn } from "@components/atomic/buttons/AnimatedBtn"

export const BlogCard = ({ cardData }) => {
    return (
        <div className="flex flex-col items-center gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 2xl:gap-12 md:flex-row">
            <div className="max-h-[400px] max-w-[400px] flex-[0.4] md:max-h-full md:max-w-full">
                <h1 className="relative text-center text-6xl font-semibold -mb-3 z-[-5] text-custom-green">{cardData.date}</h1>

                <img
                    src={cardData.imgData.src}
                    alt={cardData.imgData.alt}
                    className="w-full object-cover"
                />
            </div>

            <div className="flex-[0.6] flex flex-col gap-2 md:gap-3 xl:gap-4">
                <h2 className="titleStyle">{cardData.title}</h2>
                <div className="flex flex-col gap-2 md:gap-3 xl:gap-4">
                    {cardData.description.map((desc, index) => (
                        <p
                            key={index}
                            className="descriptionStyle"
                        >
                            {desc}
                        </p>
                    ))}
                </div>

                <AnimatedBtn
                    btnData={cardData.btnData}
                    btnStyleClass={cardData.btnData.btnStyleClass}
                />
            </div>
        </div>
    )
}