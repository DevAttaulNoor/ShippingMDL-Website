export const QualityCard = ({ cardData }) => {
    return (
        <div className="h-full flex flex-col items-center justify-center text-center p-3 gap-2 border-2 rounded-lg border-custom-green">
            <img
                src={cardData.image.src}
                alt={cardData.image.alt}
                className="w-28 object-contain invert"
            />

            <div className="flex flex-col items-center gap-1">
                <h5 className='text-xl font-medium'>{cardData.title}</h5>
                <p className="text-sm opacity-75">{cardData.description}</p>
            </div>
        </div>
    )
}
