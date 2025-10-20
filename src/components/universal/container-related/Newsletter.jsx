import { useState } from "react"
import { BasicBtn } from "../BasicBtn";
import { InputField } from "../InputField"

export const Newsletter = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="flex items-center justify-between p-10 gap-16 text-white bg-blue-950">
            <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-semibold">Join Our Newsletter</h1>
                <p className="text-xl opacity-75">
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
                    btnStyleClass='px-6 py-3 font-medium rounded-r-3xl transition-colors duration-300 bg-green-500 hover:bg-green-600'
                />
            </div>
        </div>
    )
}