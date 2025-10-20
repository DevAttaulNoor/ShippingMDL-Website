import { Link } from "react-router"

export const BasicBtn = ({ btnStyleClass = '', btnData }) => {
    return btnData.path ? (
        <Link
            to={btnData.path}
            className={`${btnStyleClass}`}
        >
            {btnData.text}
        </Link>
    ) : (
        <button
            onClick={btnData.onClick}
            className={`${btnStyleClass} cursor-pointer`}
        >
            {btnData.text}
        </button>
    )
}