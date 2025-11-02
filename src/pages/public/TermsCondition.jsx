import { Routes } from "@constants/Routes";
import { InnerContainer } from "@layouts/InnerContainer";
import { HeroSection } from "@components/compound/HeroSection";
import { HeadingWithLine } from "@components/compound/HeadingWithLine";

const termsData = [
    {
        title: "Acceptance of Terms",
        description:
            "By accessing or using our website, requesting a quote, or engaging in our logistics and freight forwarding services, you agree to these Terms and Conditions. If you do not agree, please do not use our services.",
    },
    {
        title: "Services Overview",
        description:
            "MDL Logistics provides freight forwarding, land transport, warehousing, customs clearance, and other related logistics solutions. The availability and pricing of our services are subject to change without prior notice.",
    },
    {
        title: "User Responsibilities",
        description: "You agree to use our website and services lawfully and responsibly. You must not:",
        list: [
            "Provide false, misleading, or incomplete shipment information",
            "Use our website to engage in unlawful, fraudulent, or harmful activities",
            "Interfere with or disrupt website functionality or security",
            "Infringe upon the rights of other users or third parties",
        ],
    },
    {
        title: "Shipment and Delivery Terms",
        description:
            "All shipments are subject to international shipping laws, transportation regulations, and customs requirements. Estimated delivery times are provided for convenience only and may vary due to unforeseen delays beyond our control.",
        extra:
            "MDL Logistics will not be held liable for delays caused by customs inspections, weather, or third-party carriers.",
    },
    {
        title: "Pricing and Payment",
        description:
            "All prices quoted are exclusive of applicable taxes, duties, and surcharges unless stated otherwise. Payment terms must be honored as agreed upon in the invoice or service contract.",
        extra:
            "Failure to make timely payments may result in service suspension, additional fees, or legal action to recover outstanding balances.",
    },
    {
        title: "Limitation of Liability",
        description:
            "MDL Logistics shall not be held responsible for any indirect, incidental, or consequential damages resulting from the use of our services, including delays, data loss, or loss of profits. Our liability is limited to the value of the specific shipment or service in question.",
    },
    {
        title: "Intellectual Property",
        description:
            "All content, logos, trademarks, and materials displayed on this website are the property of MDL Logistics. Unauthorized copying, reproduction, or distribution is strictly prohibited without written consent.",
    },
    {
        title: "Privacy",
        description: `Your use of our website and services is also governed by our Privacy Policy. Please review it to understand how we collect and handle your personal information.`,
        link: Routes.PRIVACY_POLICY.path,
    },
    {
        title: "Termination",
        description:
            "We reserve the right to suspend or terminate access to our website or services at any time, without prior notice, for any violation of these Terms and Conditions or applicable laws.",
    },
    {
        title: "Governing Law",
        description:
            "These Terms and Conditions are governed by and construed in accordance with the laws of Pakistan. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Karachi, Pakistan.",
    },
    {
        title: "Changes to Terms",
        description:
            "MDL Logistics reserves the right to modify these Terms and Conditions at any time. Changes will take effect immediately upon posting on this page. Continued use of our website or services constitutes your acceptance of the revised terms.",
    },
    {
        title: "Contact Us",
        description: "For questions or concerns about these Terms and Conditions, please contact us at:",
        list: [
            "Email: info@mdl-logistics.com",
            "Phone: +92 300 1234567",
            "Address: MDL Logistics, Karachi, Pakistan",
        ],
    },
];

const TermsCondition = () => {
    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: "/images/components/heroSection/home.jpg",
                    title: Routes.TERMS_CONDITION.title,
                    description: "At MDL, by accessing our website and services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our services."
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title,
                    },
                    {
                        path: Routes.TERMS_CONDITION.path,
                        title: Routes.TERMS_CONDITION.title,
                    },
                ]}
            />

            {/* Terms and Conditions Points Section */}
            <section className="innerContainerStyle innerContainerPadding">
                {termsData.map((item, index) => (
                    <div
                        key={index}
                        className="space-y-2"
                    >
                        <HeadingWithLine
                            title={item.title}
                            headingStyle="text-5xl text-custom-blue"
                        />

                        <p className="descriptionStyle">{item.description}</p>

                        {item.list && (
                            <ul className="font-light opacity-75 list-disc ml-8 space-y-1">
                                {item.list.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}

                <p className="text-end text-sm opacity-75 italic">
                    Last updated: October 2025
                </p>
            </section>
        </InnerContainer>
    );
};

export default TermsCondition;