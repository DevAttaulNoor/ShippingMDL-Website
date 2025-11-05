import { Link } from "react-router"

export const BasicBtn = ({ btnStyleClass = 'rounded-3xl text-white bg-custom-green hover:bg-custom-green/85', btnData }) => {
    return btnData.path ? (
        <Link
            to={btnData.path}
            className={`btnStyle ${btnStyleClass}`}
        >
            {btnData.text}
        </Link>
    ) : (
        <button
            onClick={btnData.onClick}
            className={`btnStyle ${btnStyleClass}`}
        >
            {btnData.text}
        </button>
    )
}