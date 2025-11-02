import { HeadingWithLine } from "../HeadingWithLine"
import { BasicBtn } from "@components/atomic/buttons/BasicBtn"

export const DetailSection = ({ detailContainerStyleClass = '', detailData }) => {
    return (
        <div className={`${detailContainerStyleClass} flex flex-col gap-4`}>
            {detailData.title && (
                <HeadingWithLine
                    title={detailData?.title}
                />
            )}

            {detailData.description && (
                <div className="flex flex-col gap-3.5">
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
                <BasicBtn
                    btnData={detailData.btnData}
                    btnStyleClass={detailData.btnData.btnStyleClass}
                />
            )}
        </div>
    )
}