import { BasicBtn } from "@components/atomic/buttons/BasicBtn"

export const ServiceCard = ({ cardContainerStyle = '', cardData }) => {
    return (
        <div
            style={{ backgroundImage: `url(${cardData.bgImage})` }}
            className={`${cardContainerStyle} relative w-full flex flex-col items-center justify-center text-center p-6 gap-2 rounded-3xl bg-cover bg-center bg-no-repeat shadow-2xl transition-all transition-500 ease-in-out cursor-pointer overflow-hidden text-white before:absolute before:inset-0 before:bg-black/30 before:rounded-3xl before:content-[''] before:z-0 hover:scale-105`}
        >
            <div className="relative z-10 flex flex-col items-center gap-2">
                <h4 className="titleStyle">{cardData.title}</h4>
                <p className="descriptionStyle">{cardData.description}</p>

                <BasicBtn
                    btnData={cardData.btnData}
                    btnStyleClass={cardData.btnData.btnStyleClass}
                />
            </div>
        </div>
    )
}