export const ImageSection = ({ imageContainerStyleClass = '', imageData }) => {
    return (
        <div className={`${imageContainerStyleClass}`}>
            <img
                src={imageData.src}
                alt={imageData.alt}
                className="w-full h-full object-contain"
            />
        </div>
    )
}