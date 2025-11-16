import { useState } from "react";
import { Routes } from "@constants/Routes";
import { ReactIcons } from "@constants/ReactIcons";
import { InnerContainer } from "@layouts/InnerContainer";
import { HeroSection } from "@components/compound/HeroSection";
import { BasicBtn } from "@components/atomic/buttons/BasicBtn";
import { InputField } from "@components/atomic/fields/InputField";
import { TextareaField } from "@components/atomic/fields/TextareaField";
import { HeadingWithLine } from "@components/compound/headings/HeadingWithLine";
import { HeadingWithDescription } from "@components/compound/headings/HeadingWithDescription";

const GetAQuote = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        origin: "",
        destination: "",
        weight: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: "/images/components/heroSection/get-a-qoute.png",
                    title: Routes.GET_A_QUOTE.title,
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.GET_A_QUOTE.path,
                        title: Routes.GET_A_QUOTE.title
                    },
                ]}
            />

            <section className="innerContainerStyle innerContainerPadding">
                <HeadingWithDescription
                    heading={{
                        title: "Get a Quote",
                    }}
                    description="Need a shipping or logistics estimate? Fill out the form below, and our team will provide a fast, accurate quote tailored to your cargo, route, and service requirements."
                />

                <div className="flex flex-col items-center gap-3.5">
                    <InputField
                        inputStyleClass='w-full basicTextInputStyle'
                        inputData={{
                            type: "text",
                            name: "name",
                            required: true,
                            placeholder: "Full Name",
                            value: form.name,
                            onChange: handleChange
                        }}
                    />

                    <div className="w-full flex flex-col items-center gap-3.5 xs:flex-row">
                        <InputField
                            inputStyleClass='w-full basicTextInputStyle'
                            inputData={{
                                type: "email",
                                name: "email",
                                required: true,
                                placeholder: "Email Address",
                                value: form.email,
                                onChange: handleChange
                            }}
                        />

                        <InputField
                            inputStyleClass='w-full basicTextInputStyle'
                            inputData={{
                                type: "text",
                                name: "phone",
                                required: true,
                                placeholder: "Phone Number",
                                value: form.phone,
                                onChange: handleChange
                            }}
                        />
                    </div>

                    <div className="w-full flex flex-col items-center gap-3.5 xs:flex-row">
                        <InputField
                            inputStyleClass='w-full basicTextInputStyle'
                            inputData={{
                                type: "text",
                                name: "origin",
                                placeholder: "Origin",
                                value: form.origin,
                                onChange: handleChange
                            }}
                        />

                        <InputField
                            inputStyleClass='w-full basicTextInputStyle'
                            inputData={{
                                type: "text",
                                name: "destination",
                                placeholder: "Destination",
                                value: form.destination,
                                onChange: handleChange
                            }}
                        />
                    </div>

                    <InputField
                        inputStyleClass='w-full basicTextInputStyle'
                        inputData={{
                            type: "number",
                            name: "weight",
                            placeholder: "Cargo Weight (KG)",
                            value: form.weight,
                            onChange: handleChange
                        }}
                    />

                    <TextareaField
                        textareaStyleClass="w-full basicTextInputStyle resize-none"
                        textareaData={{
                            rows: 4,
                            name: "message",
                            placeholder: "Additional Details",
                            value: form.message,
                            onChange: handleChange
                        }}
                    />

                    <BasicBtn
                        btnData={{
                            onClick: () => { console.log("Quote Request:", form) },
                            text: 'Submit Quote Request',
                            icon: ReactIcons.SEND_WITH_CHECK
                        }}
                    />
                </div>
            </section>
        </InnerContainer>
    );
};

export default GetAQuote;
