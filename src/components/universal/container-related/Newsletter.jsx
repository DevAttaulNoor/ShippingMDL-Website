import { useState } from "react"
import { BasicBtn } from "../BasicBtn";
import { InputField } from "../InputField"

export const Newsletter = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="text-center mb-5">
            <h1>Join Our Newsletter</h1>
            <p>Subscribe our newsletter to get latest updates & news</p>

            <div className="flex items-center">
                <InputField
                    inputData={{
                        type: 'email',
                        name: 'email',
                        placeholder: 'Enter your email',
                        value: email,
                        onChange: e => setEmail(e.target.value),
                    }}
                    inputStyleClass=""
                />

                <BasicBtn
                    btnData={{
                        text: 'Sign Up',
                        onClick: ''
                    }}
                />
            </div>
        </div>
    )
}