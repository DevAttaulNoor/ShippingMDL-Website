export const DetailWithImageLayout = ({ detailContainerStyleClass = '', rightsideData, leftsideData }) => {
    return (
        <div className={`${detailContainerStyleClass} grid grid-cols-2 gap-20`}>
            {rightsideData}

            {leftsideData}
        </div>
    )
}