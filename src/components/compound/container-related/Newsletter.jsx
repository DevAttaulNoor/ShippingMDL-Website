import { useState } from "react"
import { HeadingWithLine } from "../headings/HeadingWithLine";
import { BasicBtn } from "@components/atomic/buttons/BasicBtn";
import { InputField } from "@components/atomic/fields/InputField";

export const Newsletter = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="flex flex-col items-center justify-between innerContainerPadding py-8 gap-6 text-white bg-custom-green sm:gap-8 md:flex-row md:py-10 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16">
            <div className="flex flex-col gap-3">
                <HeadingWithLine
                    title={'Join Our Newsletter'}
                    lineStyle='bg-custom-blue'
                />

                <p className="text-sm font-light md:text-base xl:text-lg 2xl:text-xl">
                    Subscribe to Marine Dynamics Logistics’ newsletter for expert logistics insights, company news, and exclusive updates on global freight and transportation solutions.
                </p>
            </div>

            <div className="flex">
                <InputField
                    inputData={{
                        type: 'email',
                        name: 'email',
                        placeholder: 'Enter your email',
                        value: email,
                        onChange: e => setEmail(e.target.value),
                    }}
                    inputStyleClass="w-full text-sm px-4 rounded-l-3xl text-black bg-white placeholder:text-black/75 md:w-72 md:text-base md:py-3"
                />

                <BasicBtn
                    btnData={{
                        text: 'Sign Up',
                        onClick: () => { console.log('Signup Button Clicked') }
                    }}
                    btnStyleClass='btnStyle rounded-r-3xl text-white bg-custom-blue hover:bg-custom-blue/85'
                />
            </div>
        </div>
    )
}