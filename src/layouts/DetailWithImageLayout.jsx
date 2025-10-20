export const DetailWithImageLayout = ({ detailContainerStyleClass = '', rightsideData, leftsideData }) => {
    return (
        <div className={`${detailContainerStyleClass} flex gap-2`}>
            {rightsideData}

            {leftsideData}
        </div>
    )
}