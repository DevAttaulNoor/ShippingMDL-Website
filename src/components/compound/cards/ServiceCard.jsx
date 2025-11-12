import { Link } from "react-router"

export const ServiceCard = ({ cardContainerStyle = '', cardData }) => {
    return (
        <Link
            to={cardData.path}
            style={{ backgroundImage: `url(${cardData.bgImage})` }}
            className={`${cardContainerStyle} group relative w-full flex items-center justify-center text-center p-4 rounded-3xl shadow-2xl transition-transform duration-500 ease-in-out cursor-pointer bg-cover bg-center bg-no-repeat overflow-hidden text-white before:absolute before:inset-0 before:bg-black/40 before:rounded-3xl before:z-0 hover:scale-105`}
        >
            <h4 className="relative titleStyle transition-transform duration-500 ease-in-out z-10 text-custom-green group-hover:-translate-y-20">
                {cardData.title}
            </h4>

            <div className="absolute bottom-0 left-0 right-0 text-center opacity-100 descriptionStyle p-4 rounded-b-3xl translate-y-full transition-transform duration-500 ease-in-out z-10 bg-black/85 group-hover:translate-y-0">
                {cardData.description}
            </div>
        </Link>
    )
}