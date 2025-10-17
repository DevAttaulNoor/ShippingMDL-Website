export const BasicBtn = ({ btnStyleClass = '', btnData }) => {
    return (
        <button
            onClick={btnData.onClick}
            className={`${btnStyleClass}`}
        >
            {btnData.text}
        </button>
    )
}
