import { Routes } from "@constants/Routes";
import { InnerContainer } from "@layouts/InnerContainer";
import { HeroSection } from "@components/compound/HeroSection";

const TermsCondition = () => {
    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: "/images/components/heroSection/home.jpg",
                    title: Routes.TERMS_CONDITION.title,
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
            <section className="flex flex-col innerContainerPadding gap-10">
                <div className="flex flex-col items-center text-center gap-2">
                    <h1 className="text-5xl font-semibold">
                        Terms & Conditions
                    </h1>

                    <p className="text-lg opacity-75">
                        Welcome to <strong>MDL Logistics</strong>. By accessing or using our
                        website and services, you agree to comply with and be bound by the
                        following Terms and Conditions. Please read them carefully before
                        using our services.
                    </p>
                </div>

                <div className="text-gray-600 leading-relaxed space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing or using our website, requesting a quote, or engaging
                            in our logistics and freight forwarding services, you agree to
                            these Terms and Conditions. If you do not agree, please do not use
                            our services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            2. Services Overview
                        </h2>
                        <p>
                            MDL Logistics provides freight forwarding, land transport,
                            warehousing, customs clearance, and other related logistics
                            solutions. The availability and pricing of our services are
                            subject to change without prior notice.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            3. User Responsibilities
                        </h2>
                        <p>
                            You agree to use our website and services lawfully and
                            responsibly. You must not:
                        </p>
                        <ul className="list-disc ml-6 mt-2">
                            <li>
                                Provide false, misleading, or incomplete shipment information
                            </li>
                            <li>
                                Use our website to engage in unlawful, fraudulent, or harmful
                                activities
                            </li>
                            <li>
                                Interfere with or disrupt website functionality or security
                            </li>
                            <li>
                                Infringe upon the rights of other users or third parties
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            4. Shipment and Delivery Terms
                        </h2>
                        <p>
                            All shipments are subject to international shipping laws,
                            transportation regulations, and customs requirements. Estimated
                            delivery times are provided for convenience only and may vary due
                            to unforeseen delays beyond our control.
                        </p>
                        <p className="mt-2">
                            MDL Logistics will not be held liable for delays caused by customs
                            inspections, weather, or third-party carriers.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            5. Pricing and Payment
                        </h2>
                        <p>
                            All prices quoted are exclusive of applicable taxes, duties, and
                            surcharges unless stated otherwise. Payment terms must be honored
                            as agreed upon in the invoice or service contract.
                        </p>
                        <p className="mt-2">
                            Failure to make timely payments may result in service suspension,
                            additional fees, or legal action to recover outstanding balances.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            6. Limitation of Liability
                        </h2>
                        <p>
                            MDL Logistics shall not be held responsible for any indirect,
                            incidental, or consequential damages resulting from the use of our
                            services, including delays, data loss, or loss of profits. Our
                            liability is limited to the value of the specific shipment or
                            service in question.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            7. Intellectual Property
                        </h2>
                        <p>
                            All content, logos, trademarks, and materials displayed on this
                            website are the property of MDL Logistics. Unauthorized copying,
                            reproduction, or distribution is strictly prohibited without
                            written consent.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            8. Privacy
                        </h2>
                        <p>
                            Your use of our website and services is also governed by our{" "}
                            <a
                                href={Routes.PRIVACY_POLICY.path}
                                className="text-blue-600 hover:underline"
                            >
                                Privacy Policy
                            </a>
                            . Please review it to understand how we collect and handle your
                            personal information.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            9. Termination
                        </h2>
                        <p>
                            We reserve the right to suspend or terminate access to our website
                            or services at any time, without prior notice, for any violation
                            of these Terms and Conditions or applicable laws.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            10. Governing Law
                        </h2>
                        <p>
                            These Terms and Conditions are governed by and construed in
                            accordance with the laws of Pakistan. Any disputes shall be
                            subject to the exclusive jurisdiction of the courts located in
                            Karachi, Pakistan.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            11. Changes to Terms
                        </h2>
                        <p>
                            MDL Logistics reserves the right to modify these Terms and
                            Conditions at any time. Changes will take effect immediately upon
                            posting on this page. Continued use of our website or services
                            constitutes your acceptance of the revised terms.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            12. Contact Us
                        </h2>
                        <p>
                            For questions or concerns about these Terms and Conditions, please
                            contact us at:
                        </p>
                        <ul className="ml-6 mt-2">
                            <li>
                                <strong>Email:</strong> info@mdl-logistics.com
                            </li>
                            <li>
                                <strong>Phone:</strong> +92 300 1234567
                            </li>
                            <li>
                                <strong>Address:</strong> MDL Logistics, Karachi, Pakistan
                            </li>
                        </ul>
                    </div>

                    <p className="text-sm text-gray-400 mt-8 italic">
                        Last updated: October 2025
                    </p>
                </div>
            </section>
        </InnerContainer>
    );
};

export default TermsCondition;