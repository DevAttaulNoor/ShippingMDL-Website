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
import { DetailWithImageLayout } from "@layouts/DetailWithImageLayout";
import { ImageSection } from "@components/compound/detailsection-related/ImageSection";
import { DetailSection } from "@components/compound/detailsection-related/DetailSection";

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

            {/* Why Request a Qoute from Us Section */}
            <section className="innerContainerPadding">
                <DetailWithImageLayout
                    rightsideData={
                        <ImageSection
                            imageData={{
                                src: '/images/components/detailSection/about-company.png',
                                alt: 'Image of about our company'
                            }}
                        />
                    }

                    leftsideData={
                        <DetailSection
                            detailData={{
                                title: 'Why Request a Quote from Us',
                                description: [
                                    'At MDL, we understand that every shipment is unique, and accurate logistics planning is critical for smooth, timely deliveries. Requesting a quote from us is the first step in ensuring that your cargo receives expert handling, transparent pricing, and reliable service.',
                                    'Our quote process is designed to save you time, minimize surprises, and provide complete clarity on costs, transit times, and regulatory requirements. Whether you’re shipping domestically or internationally, we take into account your cargo type, volume, destination, and urgency to provide a quote tailored to your needs.',
                                    'By requesting a quote, you gain access to:'
                                ],
                                list: [
                                    'Fast response times and personalized attention from our dedicated team.',
                                    'Guidance on customs, documentation, and regulatory compliance.',
                                    'Real-time tracking and updates to plan your shipments efficiently.',
                                    'Flexible solutions for all cargo types, including high-value, fragile, or project shipments.',
                                ]
                            }}
                        />
                    }
                />
            </section>

            {/* How Our Qoute Process Works Section */}
            <section className="innerContainerPadding">
                <HeadingWithLine
                    title="How Our Quote Process Works"
                />

                <ol className="list-decimal list-inside text-gray-700 space-y-3">
                    <li>
                        <strong>Fill Out the Quote Form:</strong> Provide your shipment details, including origin, destination, cargo weight, and any special instructions.
                    </li>
                    <li>
                        <strong>Review by Our Logistics Team:</strong> Our experts carefully evaluate your shipment requirements, customs documentation needs, and service options.
                    </li>
                    <li>
                        <strong>Receive Your Personalized Quote:</strong> You’ll get a detailed, transparent quote that includes pricing, delivery estimates, and optional services.
                    </li>
                    <li>
                        <strong>Confirm & Schedule Shipment:</strong> Once you approve the quote, our team coordinates pickup, transit, and delivery to ensure smooth, on-time shipment.
                    </li>
                </ol>
            </section>

            {/* Get a Qoute Form Section */}
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
