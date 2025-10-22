import { BasicBtn } from "@components/atomic/buttons/BasicBtn"

export const BlogCard = ({ cardData }) => {
    return (
        <div className="flex items-center gap-6">
            <div className="flex-[0.35]">
                <h1 className="relative text-center text-6xl font-semibold -mb-3 z-[-5] text-blue-500">{cardData.date}</h1>

                <img
                    src={cardData.imgData.src}
                    alt={cardData.imgData.alt}
                    className="w-full object-cover"
                />
            </div>

            <div className="flex-[0.65] flex flex-col gap-3.5">
                <h2 className="text-5xl font-semibold">{cardData.title}</h2>
                <p className="text-lg opacity-75">{cardData.description}</p>

                <BasicBtn
                    btnData={cardData.btnData}
                    btnStyleClass={cardData.btnData.btnStyleClass}
                />
            </div>
        </div>
    )
}