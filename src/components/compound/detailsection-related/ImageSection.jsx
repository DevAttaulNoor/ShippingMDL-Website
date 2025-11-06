export const ImageSection = ({ imageContainerStyleClass = '', imageData }) => {
    return (
        <div className={`${imageContainerStyleClass} relative max-h-[400px] max-w-[400px] p-5 mx-auto rounded-xl border-2 border-dashed border-custom-green bg-white/5 hover:bg-white/10 transition-all duration-500 md:max-h-full md:max-w-full`}>
            <span className="absolute top-2 left-2 w-2 h-2 bg-custom-green rounded-full"></span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-custom-green rounded-full"></span>
            <span className="absolute bottom-2 left-2 w-2 h-2 bg-custom-green rounded-full"></span>
            <span className="absolute bottom-2 right-2 w-2 h-2 bg-custom-green rounded-full"></span>

            <img
                src={imageData.src}
                alt={imageData.alt}
                className="w-full h-full rounded-xl object-fill transition-transform duration-500 hover:scale-[1.02]"
            />
        </div>
    )
}