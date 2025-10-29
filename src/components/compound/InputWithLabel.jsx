import { InputField } from "@components/atomic/fields/InputField"

export const InputWithLabel = ({ containerStyleClass = '', labelData, inputData }) => {
    return (
        <div className={`${containerStyleClass}`}>
            <label
                htmlFor={labelData.htmlFor}
                className='text-lg font-medium'
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