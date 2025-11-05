import { Routes } from "@constants/Routes";
import { InnerContainer } from "@layouts/InnerContainer";
import { HeroSection } from "@components/compound/HeroSection";
import { HeadingWithLine } from "@components/compound/headings/HeadingWithLine";

const policyData = [
    {
        title: "Information We Collect",
        description:
            "We collect personal information that you voluntarily provide when you contact us, request a quote, or use our logistics services. This may include:",
        list: [
            "Name, email address, and contact details",
            "Company information (if applicable)",
            "Shipping and billing addresses",
            "Details about shipments or logistics requirements",
            "Any additional information you provide through our forms",
        ],
    },
    {
        title: "How We Use Your Information",
        description: "We use your information to:",
        list: [
            "Provide, manage, and improve our logistics services",
            "Respond to your inquiries or service requests",
            "Process orders, shipments, and invoices",
            "Send updates about your shipments and service improvements",
            "Comply with legal obligations and protect against fraudulent or unauthorized activity",
        ],
    },
    {
        title: "Data Protection and Security",
        description:
            "We use appropriate technical and organizational measures to protect your data from unauthorized access, loss, misuse, or disclosure. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.",
    },
    {
        title: "Sharing of Information",
        description: "We do not sell or rent your personal data. We may share your information with:",
        list: [
            "Trusted partners or carriers involved in fulfilling services",
            "Payment processors for secure transaction handling",
            "Legal authorities when required by law or to protect our legitimate interests",
        ],
    },
    {
        title: "Cookies and Tracking Technologies",
        description:
            "Our website uses cookies to improve user experience, analyze traffic, and remember user preferences. You can disable cookies through browser settings, but this may affect website functionality.",
    },
    {
        title: "Your Rights",
        description:
            "You have the right to access, update, or request deletion of your personal data. If you wish to exercise these rights, please contact us using the details below.",
    },
    {
        title: "Retention of Data",
        description:
            "We retain personal information only as long as necessary to fulfill the purposes described in this policy or as required by law.",
    },
    {
        title: "Changes to This Policy",
        description:
            "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Updates will be posted on this page with a revised “Last Updated” date.",
    },
    {
        title: "Contact Us",
        description:
            "If you have questions about this Privacy Policy or our data handling practices, please contact us at:",
        list: [
            "Email: info@mdl-logistics.com",
            "Phone: +92 300 1234567",
            "Address: MDL Logistics, Karachi, Pakistan",
        ],
    },
];

const Policy = () => {
    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: "/images/components/heroSection/home.jpg",
                    title: Routes.PRIVACY_POLICY.title,
                    description: "At MDL, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website, use our services, or communicate with us."
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title,
                    },
                    {
                        path: Routes.PRIVACY_POLICY.path,
                        title: Routes.PRIVACY_POLICY.title,
                    },
                ]}
            />

            {/* Privacy Policy Points Section */}
            <section className="innerContainerStyle innerContainerPadding">
                {policyData.map((item, index) => (
                    <div
                        key={index}
                        className="space-y-2"
                    >
                        <HeadingWithLine
                            title={item.title}
                            headingStyle="text-custom-blue"
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

export default Policy;