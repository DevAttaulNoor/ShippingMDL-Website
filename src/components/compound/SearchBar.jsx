import { ReactIcons } from "@constants/ReactIcons"
import { InputField } from "@components/atomic/fields/InputField"

export const SearchBar = ({ inputData }) => {
    return (
        <div className="flex items-center basicTextInputStyle">
            <InputField
                inputData={inputData}
                inputStyleClass={inputData.inputStyleClass}
            />

            <span>{ReactIcons.SEARCH}</span>
        </div>
    )
}