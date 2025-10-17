export const InputField = ({ inputStyleClass = '', inputData }) => {
    return (
        <input
            type={inputData.type}
            name={inputData.name}
            value={inputData.value}
            onChange={inputData.onChange}
            placeholder={inputData.placeholder}
            className={`${inputStyleClass}`}
        />
    )
}