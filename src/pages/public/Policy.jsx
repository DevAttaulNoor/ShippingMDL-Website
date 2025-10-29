import { Routes } from "@constants/Routes";
import { InnerContainer } from "@layouts/InnerContainer";
import { HeroSection } from "@components/compound/HeroSection";

const Policy = () => {
    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: "/images/components/heroSection/home.jpg",
                    title: Routes.PRIVACY_POLICY.title,
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
            <section className="flex flex-col innerContainerPadding gap-10">
                <div className="flex flex-col items-center text-center gap-2">
                    <h1 className="text-5xl font-semibold">
                        Privacy Policy
                    </h1>

                    <p className="text-lg opacity-75">
                        At <strong>MDL Logistics</strong>, we value your privacy and are committed
                        to protecting your personal information. This Privacy Policy explains
                        how we collect, use, and safeguard your data when you visit our
                        website, use our services, or communicate with us.
                    </p>
                </div>

                <div className="text-gray-600 leading-relaxed space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            1. Information We Collect
                        </h2>
                        <p>
                            We collect personal information that you voluntarily provide when
                            you contact us, request a quote, or use our logistics services.
                            This may include:
                        </p>
                        <ul className="list-disc ml-6 mt-2">
                            <li>Name, email address, and contact details</li>
                            <li>Company information (if applicable)</li>
                            <li>Shipping and billing addresses</li>
                            <li>Details about shipments or logistics requirements</li>
                            <li>Any additional information you provide through our forms</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            2. How We Use Your Information
                        </h2>
                        <p>We use your information to:</p>
                        <ul className="list-disc ml-6 mt-2">
                            <li>Provide, manage, and improve our logistics services</li>
                            <li>Respond to your inquiries or service requests</li>
                            <li>Process orders, shipments, and invoices</li>
                            <li>Send updates about your shipments and service improvements</li>
                            <li>
                                Comply with legal obligations and protect against fraudulent or
                                unauthorized activity
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            3. Data Protection and Security
                        </h2>
                        <p>
                            We use appropriate technical and organizational measures to
                            protect your data from unauthorized access, loss, misuse, or
                            disclosure. However, please note that no method of transmission
                            over the Internet or electronic storage is 100% secure.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            4. Sharing of Information
                        </h2>
                        <p>
                            We do not sell or rent your personal data. We may share your
                            information with:
                        </p>
                        <ul className="list-disc ml-6 mt-2">
                            <li>Trusted partners or carriers involved in fulfilling services</li>
                            <li>Payment processors for secure transaction handling</li>
                            <li>
                                Legal authorities when required by law or to protect our
                                legitimate interests
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            5. Cookies and Tracking Technologies
                        </h2>
                        <p>
                            Our website uses cookies to improve user experience, analyze
                            traffic, and remember user preferences. You can choose to disable
                            cookies through your browser settings, but this may affect certain
                            website functionalities.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            6. Your Rights
                        </h2>
                        <p>
                            You have the right to access, update, or request deletion of your
                            personal data. If you wish to exercise any of these rights, please
                            contact us using the information provided below.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            7. Retention of Data
                        </h2>
                        <p>
                            We retain personal information only as long as necessary to
                            fulfill the purposes described in this policy or as required by
                            applicable law.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            8. Changes to This Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy periodically to reflect changes
                            in our practices or legal requirements. Updates will be posted on
                            this page with a revised “Last Updated” date.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            9. Contact Us
                        </h2>
                        <p>
                            If you have questions about this Privacy Policy or our data
                            handling practices, please contact us at:
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

export default Policy;