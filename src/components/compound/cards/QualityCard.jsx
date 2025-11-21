export const QualityCard = ({ cardData }) => {
    return (
        <div className="h-full flex flex-col items-center justify-between text-center p-3 gap-2.5 border-2 rounded-lg border-custom-green">
            <div className="w-full flex flex-col items-center gap-2.5">
                <img
                    src={cardData.image.src}
                    alt={cardData.image.alt}
                    className="w-28 object-contain invert"
                />
                <h5 className='text-xl font-medium'>{cardData.title}</h5>
            </div>

            <p className="opacity-75">{cardData.description}</p>
        </div>
    )
}
