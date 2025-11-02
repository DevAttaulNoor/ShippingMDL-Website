import { useState } from "react"
import { BasicBtn } from "@components/atomic/buttons/BasicBtn";
import { InputField } from "@components/atomic/fields/InputField";

export const Newsletter = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="flex items-center justify-between innerContainerPadding py-10 gap-15 text-white bg-custom-green">
            <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-semibold">Join Our Newsletter</h1>
                <p className="descriptionStyle">
                    Subscribe to Marine Dynamics Logistics’ newsletter for expert logistics
                    insights, company news, and exclusive updates on global freight and
                    transportation solutions.
                </p>
            </div>

            <div className="flex shrink-0">
                <InputField
                    inputData={{
                        type: 'email',
                        name: 'email',
                        placeholder: 'Enter your email',
                        value: email,
                        onChange: e => setEmail(e.target.value),
                    }}
                    inputStyleClass="w-72 px-4 py-3 rounded-l-3xl text-black bg-white placeholder:text-black/75"
                />

                <BasicBtn
                    btnData={{
                        text: 'Sign Up',
                        onClick: () => { console.log('Signup Button Clicked') }
                    }}
                    btnStyleClass='px-6 py-3 font-medium rounded-r-3xl transition-colors duration-300 text-white bg-custom-blue hover:bg-custom-blue/85'
                />
            </div>
        </div>
    )
}