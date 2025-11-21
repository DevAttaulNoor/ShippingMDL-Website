import { Routes } from "@constants/Routes"
import { useFetch } from "@hooks/useFetch";
import { useScrollFade } from "@hooks/useScrollFade";
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { BasicBtn } from "@components/atomic/buttons/BasicBtn";
import { ServiceCard } from "@components/compound/cards/ServiceCard"
import { DetailWithImageLayout } from "@layouts/DetailWithImageLayout";
import { ImageSection } from "@components/compound/detailsection-related/ImageSection";
import { DetailSection } from "@components/compound/detailsection-related/DetailSection";
import { HeadingWithDescription } from "@components/compound/headings/HeadingWithDescription";

const Services = () => {
    const { data } = useFetch("/data/Services.json");
    const fadeWeDeliver = useScrollFade("left");
    const fadeExpectUs = useScrollFade("right");
    const fadeOurLogistics = useScrollFade("left");

    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: '/images/components/heroSection/service.png',
                    title: 'Services'
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.SERVICES.path,
                        title: Routes.SERVICES.title
                    },
                ]}
            />

            {/* What We Deliver Section */}
            <section
                ref={fadeWeDeliver.ref}
                style={fadeWeDeliver.style}
                className="innerContainerPadding"
            >
                <DetailWithImageLayout
                    rightsideData={
                        <ImageSection
                            imageData={{
                                src: '/images/components/detailSection/what-we-deliver.png',
                                alt: 'Image representing logistics services introduction'
                            }}
                        />
                    }

                    leftsideData={
                        <DetailSection
                            detailData={{
                                title: 'What We Deliver',
                                description: [
                                    'At Marine Dynamic Logistics, we provide streamlined, reliable, and fully integrated logistics solutions designed to simplify complex freight operations. Whether you are shipping locally or internationally, our services are engineered to enhance efficiency, reduce transit delays, and provide unmatched visibility throughout the shipment journey.',
                                    'Our focus is simple — to give businesses a smoother, smarter, and stress-free logistics experience. From cargo handling to route planning and customs processing, we ensure your goods move across borders with complete accuracy and zero complications.',
                                    'Backed by experienced professionals, industry certifications, and global freight partners, we deliver logistics solutions that allow you to operate confidently, scale quickly, and meet customer expectations with ease.'
                                ]
                            }}
                        />
                    }
                />
            </section>

            {/* What You Can Expect From Us Section */}
            <section
                ref={fadeExpectUs.ref}
                style={fadeExpectUs.style}
                className="innerContainerPadding"
            >
                <DetailWithImageLayout
                    rightsideData={
                        <DetailSection
                            detailData={{
                                title: 'What You Can Expect From Us',
                                description: [
                                    'When you choose Marine Dynamic Logistics, you gain a dedicated logistics partner committed to delivering transparency, consistency, and operational excellence. Our service model focuses on simplifying shipping challenges while ensuring you stay informed and in control.',
                                    'We deliver end-to-end freight forwarding solutions that include documentation, multimodal transport, customs assistance, real-time shipment tracking, and proactive customer support. No matter the service type or cargo size, we maintain strict quality benchmarks to guarantee smooth movement from pickup to final delivery.'
                                ],
                                list: [
                                    'Reliable freight services with globally connected operations',
                                    'Clear and transparent pricing with no hidden costs',
                                    'Expert documentation and customs clearance handling',
                                    'Real-time tracking and consistent shipment updates',
                                    'A dedicated customer support team available at every step'
                                ]
                            }}
                        />
                    }
                    leftsideData={
                        <ImageSection
                            imageData={{
                                src: '/images/components/detailSection/what-to-except.png',
                                alt: 'Image representing client expectations in logistics'
                            }}
                        />
                    }
                />
            </section>

            {/* How Our Logistics Process Works Section */}
            <section
                ref={fadeOurLogistics.ref}
                style={fadeOurLogistics.style}
                className="innerContainerPadding"
            >
                <DetailWithImageLayout
                    rightsideData={
                        <ImageSection
                            imageData={{
                                src: '/images/components/detailSection/how-we-work.png',
                                alt: 'Image representing logistics workflow'
                            }}
                        />
                    }
                    leftsideData={
                        <DetailSection
                            detailData={{
                                title: 'How Our Logistics Process Works',
                                description: [
                                    'Our logistics workflow is designed to be fast, transparent, and highly efficient. By combining advanced planning tools with expert execution, we ensure every shipment moves through a structured and well-monitored process.',
                                    'From your initial inquiry to final delivery, our team stays aligned with your goals, proactively managing routes, documentation, and compliance to avoid delays and reduce overall freight costs.',
                                    'Here’s what our streamlined process looks like:'
                                ],
                                list: [
                                    'Share Your Requirements – Provide shipment type, volume, route, and timelines.',
                                    'We Design the Best Route Plan – Our experts evaluate costs, transit safety, and delivery speed.',
                                    'Documentation & Compliance – We prepare and process customs paperwork to ensure clearance without delays.',
                                    'Secure & On-Time Delivery – Your cargo is delivered safely, backed by complete delivery confirmation.'
                                ]
                            }}
                        />
                    }
                />
            </section>

            {/* Services Section */}
            <section className="sectionStyle innerContainerPadding">
                <HeadingWithDescription
                    containerStyle='text-center'
                    heading={{
                        title: 'Our Logistics Services'
                    }}
                    description={"Delivering end-to-end freight forwarding and supply chain solutions across land, sea, air and cross-border routes with efficiency."}
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:gap-7 xl:grid-cols-3 xl:gap-8 2xl:gap-10">
                    {data?.map((item, index) => (
                        <ServiceCard
                            key={index}
                            cardContainerStyle='h-56 xs:w-[80%] xs:mx-auto xs:h-60 sm:w-full md:h-72 xl:h-80 2xl:h-96'
                            cardData={{
                                bgImage: item.image?.src,
                                path: item.path,
                                title: item.title,
                                description: item.description,
                            }}
                        />
                    ))}
                </div>
            </section>

            {/* Ready to Move Your Cargo With Confidence Section */}
            <section className="sectionStyle sectionYPadding innerContainerPadding bg-custom-blue text-white">
                <HeadingWithDescription
                    heading={{
                        title: 'Ready to Move Your Cargo With Confidence?',
                    }}
                    description={
                        "Whether you're shipping locally or internationally, our logistics team is ready to assist you with tailored freight solutions, transparent support, and fast response times. From choosing the right shipping method to handling customs documentation and delivery coordination, we ensure a smooth and stress-free experience from start to finish. Connect with us today to receive expert guidance and reliable service designed around your cargo needs."
                    }
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
    )
}

export default Services