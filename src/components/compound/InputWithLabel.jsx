import { InputField } from "@components/atomic/fields/InputField"

export const InputWithLabel = ({ containerStyleClass = '', labelData, inputData }) => {
    return (
        <div className={`${containerStyleClass}`}>
            <label
                htmlFor={labelData.htmlFor}
                className=''
            >
                {labelData.text}
            </label>

            <InputField
                inputData={inputData}
                inputStyleClass={inputData.inputStyleClass}
            />
        </div>
    )
}
