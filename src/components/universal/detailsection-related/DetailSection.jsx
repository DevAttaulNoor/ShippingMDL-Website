import { BasicBtn } from "../BasicBtn"

export const DetailSection = ({ detailContainerStyleClass = '', detailData }) => {
    return (
        <div className={`${detailContainerStyleClass} flex flex-col gap-4`}>
            {detailData.title && (
                <h1 className="text-5xl font-semibold">{detailData.title}</h1>
            )}

            {detailData.description && (
                <div className="flex flex-col gap-3.5">
                    {detailData.description.map((desc, index) => (
                        <p
                            key={index}
                            className="text-xl font-light opacity-75"
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