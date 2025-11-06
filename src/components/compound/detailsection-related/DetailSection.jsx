import { HeadingWithLine } from "../headings/HeadingWithLine"
import { AnimatedBtn } from "@components/atomic/buttons/AnimatedBtn"

export const DetailSection = ({ detailContainerStyleClass = '', detailData }) => {
    return (
        <div className={`${detailContainerStyleClass} flex flex-col gap-2 md:gap-3 xl:gap-4`}>
            {detailData.title && (
                <HeadingWithLine
                    title={detailData?.title}
                />
            )}

            {detailData.description && (
                <div className="flex flex-col gap-2 md:gap-3 xl:gap-4">
                    {detailData.description.map((desc, index) => (
                        <p
                            key={index}
                            className="descriptionStyle"
                        >
                            {desc}
                        </p>
                    ))}
                </div>
            )}

            {detailData.btnData && (
                <AnimatedBtn
                    btnData={detailData.btnData}
                    btnStyleClass={detailData.btnData.btnStyleClass}
                />
            )}
        </div>
    )
}