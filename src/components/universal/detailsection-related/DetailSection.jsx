import { BasicBtn } from "../BasicBtn"

export const DetailSection = ({ detailContainerStyleClass = '', detailData }) => {
    return (
        <div className={`${detailContainerStyleClass}`}>
            {detailData.title && (
                <h1>{detailData.title}</h1>
            )}

            {detailData.description && (
                <p>{detailData.description}</p>
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