import { BasicBtn } from "@components/atomic/buttons/BasicBtn"

export const BlogCard = ({ cardData }) => {
    return (
        <div className="flex items-center gap-10">
            <div className="flex-[0.4]">
                <h1 className="relative text-center text-6xl font-semibold -mb-3 z-[-5] text-custom-green">{cardData.date}</h1>

                <img
                    src={cardData.imgData.src}
                    alt={cardData.imgData.alt}
                    className="w-full object-cover"
                />
            </div>

            <div className="flex-[0.6] flex flex-col gap-4">
                <h2 className="titleStyle">{cardData.title}</h2>
                <p className="descriptionStyle">{cardData.description}</p>

                <BasicBtn
                    btnData={cardData.btnData}
                    btnStyleClass={cardData.btnData.btnStyleClass}
                />
            </div>
        </div>
    )
}