import { useState } from "react";
import { Routes } from "@constants/Routes";
import { useFetch } from "@hooks/useFetch";
import { InnerContainer } from "@layouts/InnerContainer";
import { Accordion } from "@components/atomic/Accordion";
import { HeroSection } from "@components/compound/HeroSection";
import { BasicBtn } from "@components/atomic/buttons/BasicBtn";
import { InputField } from "@components/atomic/fields/InputField";
import { DetailWithImageLayout } from "@layouts/DetailWithImageLayout";
import { ImageSection } from "@components/compound/detailsection-related/ImageSection";
import { DetailSection } from "@components/compound/detailsection-related/DetailSection";
import { HeadingWithDescription } from "@components/compound/headings/HeadingWithDescription";

const Faqs = () => {
    const { data } = useFetch("/data/Faqs.json");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "Shipping & Delivery", "Customs & Documentation", "Payment & Charges", "Tracking & Technology", "General Questions"];

    const filteredData = data?.filter(item =>
        (selectedCategory === "All" || item.category === selectedCategory) &&
        item.question.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: '/images/components/heroSection/faqs.png',
                    title: 'Frequently Asked Questions',
                }}
                breadcrumbData={[
                    { path: Routes.HOME.path, title: Routes.HOME.title },
                    { path: Routes.FAQ.path, title: Routes.FAQ.title },
                ]}
            />

            {/* About the Company Section */}
            <section className="innerContainerPadding">
                <DetailWithImageLayout
                    rightsideData={
                        <ImageSection
                            imageData={{
                                src: '/images/components/detailSection/faq-matter.png',
                                alt: 'Image of why our faq matter'
                            }}
                        />
                    }

                    leftsideData={
                        <DetailSection
                            detailData={{
                                title: 'Why Our FAQs Matter',
                                description: [
                                    'At MDL (Modern Development Logistics), we understand that logistics and freight forwarding can sometimes be complex and overwhelming. Our FAQ resource is designed to provide clear, concise, and actionable answers to the most common questions our clients ask.',
                                    'Whether you’re a first-time shipper or a seasoned business owner, this section will guide you through key aspects of our operations, services, and policies, helping you make informed decisions and streamline your logistics experience.',
                                    'This guide is intended to save you time and simplify your shipping experience, giving you quick, reliable information without having to wait for customer support. We believe in transparency, efficiency, and ensuring our clients feel confident in every step of the logistics process.',
                                    'By referring to our FAQs first, you can resolve queries independently, make informed decisions, and better plan your shipments — all while gaining insight into MDL’s professional standards and commitment to service excellence.'
                                ]
                            }}
                        />
                    }
                />
            </section>

            {/* Faqs Section */}
            <section className="sectionStyle innerContainerPadding">
                <HeadingWithDescription
                    heading={{
                        title: 'Frequently Asked Questions',
                    }}
                    description={"Find quick answers to the most common questions about our logistics and freight services. Explore the FAQs below to understand our process, policies, and support options with ease."}
                />

                <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap gap-2.5 mx-auto">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-full border transition cursor-pointer hover:text-white hover:bg-custom-green ${selectedCategory === cat ? "bg-custom-green text-white" : "bg-white text-gray-800 border-gray-300"}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <InputField
                        inputStyleClass='w-full p-3 border-2 rounded-md border-gray-300 focus:border-custom-green focus:outline-none'
                        inputData={{
                            type: "text",
                            placeholder: "Search your question...",
                            value: searchQuery,
                            onChange: e => setSearchQuery(e.target.value)
                        }}
                    />

                    <Accordion
                        accordionData={filteredData}
                    />
                </div>
            </section>

            {/* Still Need Help Section */}
            <section className="sectionStyle sectionYPadding innerContainerPadding bg-custom-blue text-white">
                <HeadingWithDescription
                    heading={{
                        title: 'Still Need Help?',
                    }}
                    description={"If you can’t find the answer you’re looking for, our logistics experts are here to assist. Reach out to us directly and get personalized support for your shipments, documentation, and other inquiries."}
                />

                <div className="flex flex-wrap justify-center gap-2.5">
                    <BasicBtn
                        btnStyleClass="px-6 py-3 rounded-md text-white bg-custom-green"
                        btnData={{
                            text: "Contact Us",
                            path: Routes.CONTACT.path
                        }}
                    />

                    <BasicBtn
                        btnStyleClass="px-6 py-3 rounded-md text-custom-green bg-white"
                        btnData={{
                            text: "Request a Quote",
                            path: Routes.GET_A_QUOTE.path
                        }}
                    />
                </div>
            </section>
        </InnerContainer>
    );
};

export default Faqs;