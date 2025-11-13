import { Link } from "react-router"

export const BasicBtn = ({ btnStyleClass = 'rounded-3xl text-white bg-custom-green hover:bg-custom-green/85', btnData }) => {
    return btnData.path ? (
        <Link
            to={btnData.path}
            className={`flex items-center gap-2 btnStyle ${btnStyleClass}`}
        >
            {btnData.text && (
                <p>{btnData.text}</p>
            )}

            {btnData.icon && (
                <span>{btnData.icon}</span>
            )}
        </Link>
    ) : (
        <button
            onClick={btnData.onClick}
            className={`flex items-center gap-2 btnStyle ${btnStyleClass}`}
        >
            {btnData.text && (
                <p>{btnData.text}</p>
            )}

            {btnData.icon && (
                <span>{btnData.icon}</span>
            )}
        </button>
    )
}