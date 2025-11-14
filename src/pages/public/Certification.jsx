import { Routes } from "@constants/Routes";
import { InnerContainer } from "@layouts/InnerContainer";
import { HeroSection } from "@components/compound/HeroSection";
import { HeadingWithDescription } from "@components/compound/headings/HeadingWithDescription";

const certificationsList = [
    {
        img: "/images/certifications/piffa.png",
        title: "PIFFA Membership",
        description: "Accredited member of the Pakistan International Freight Forwarders Association.",
    },
];

const Certification = () => {
    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: "/images/components/heroSection/home.jpg",
                    title: Routes.CERTIFICATION.title,
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.CERTIFICATION.path,
                        title: Routes.CERTIFICATION.title
                    },
                ]}
            />

            {/* Certificates the Section */}
            <section className="innerContainerStyle innerContainerPadding">
                <HeadingWithDescription
                    heading={{
                        title: "Our Certifications",
                    }}
                    description="Marine Dynamics Logistics holds globally recognized certifications that validate our commitment to quality, safety, and professional logistics standards. These certifications reflect our dedication to maintaining compliance, building trust, and delivering excellence across all operations."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                    {certificationsList.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white"
                        >
                            <img src={item.img} alt={item.title} className="h-20 mx-auto mb-4 object-contain" />
                            <h3 className="text-xl font-semibold text-center">{item.title}</h3>
                            <p className="text-gray-500 text-center mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </InnerContainer>
    );
};

export default Certification;
