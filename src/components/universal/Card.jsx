import { BasicBtn } from "./BasicBtn"

export const Card = ({ cardContainerStyle = '', cardData }) => {
    return (
        <div className={`${cardContainerStyle}`}>
            <img
                src={cardData.imgData.src}
                alt={cardData.imgData.alt}
                className={`${cardData.imgData.styleClass}`}
            />

            <div className="card-body text-center">
                <h3 className="card-title fw-bold">{cardData.title}</h3>
                <p className="card-text">{cardData.description}</p>

                <BasicBtn
                    btnData={cardData.btnData}
                    btnStyleClass={cardData.btnStyleClass}
                />
            </div>
        </div>
    )
}