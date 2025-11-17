import { Routes } from "@constants/Routes"
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { DetailWithImageLayout } from "@layouts/DetailWithImageLayout"
import { ImageSection } from "@components/compound/detailsection-related/ImageSection"
import { DetailSection } from "@components/compound/detailsection-related/DetailSection"

const About = () => {
    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: '/images/components/heroSection/about.png',
                    title: 'About Us'
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.ABOUT.path,
                        title: Routes.ABOUT.title
                    },
                ]}
            />

            {/* About the Company Section */}
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
                                title: 'About our Company',
                                description: [
                                    'Marine Dynamic Logistics is a Karachi-based freight forwarding and logistics company dedicated to delivering seamless, efficient, and secure cargo solutions across the globe. Strategically located in Pakistan’s commercial and maritime hub, we take pride in supporting international trade with reliable end-to-end logistics services tailored to meet diverse industry needs.',
                                    'As a proud PIFFA-certified freight forwarder, Marine Dynamic Logistics upholds the highest standards of professionalism, compliance, and operational excellence. Our team consists of experienced logistics specialists who combine expertise with advanced systems to ensure smooth cargo movement from origin to destination.',
                                    'With strong global partnerships, a client-first approach, and a deep understanding of regional trade dynamics, Marine Dynamic Logistics guarantees timely deliveries, transparent operations, and cost-effective logistics strategies.',
                                    'Whether it’s managing standard cargo, high-value shipments, time-critical freight, or specialized DG consignments, we strive to provide the most trusted and efficient logistics solutions in Pakistan and beyond.'
                                ]
                            }}
                        />
                    }
                />
            </section>

            {/* About the President Section */}
            <section className="innerContainerPadding">
                <DetailWithImageLayout
                    detailContainerStyleClass="flex-col-reverse"
                    rightsideData={
                        <DetailSection
                            detailData={{
                                title: 'About our President',
                                description: [
                                    'As the President of Marine Dynamic Logistics, he brings extensive leadership experience and a deep understanding of global logistics operations. With a vision rooted in integrity, innovation, and service excellence, he has played a pivotal role in establishing the company as a trusted name in the freight forwarding and supply chain industry.',
                                    'His strategic leadership and focus on operational efficiency continue to drive Marine Dynamic Logistics toward sustained growth, strong international partnerships, and enhanced customer satisfaction. With commitment to industry standards and a forward-thinking approach, he remains dedicated to advancing Pakistan’s logistics capabilities and delivering world-class transportation solutions to businesses across the region.'
                                ]
                            }}
                        />
                    }
                    leftsideData={
                        <ImageSection
                            imageData={{
                                src: '/images/components/detailSection/about-president.png',
                                alt: 'Image of about our president'
                            }}
                        />
                    }
                />
            </section>

            {/* About our Vision Section */}
            <section className="innerContainerPadding">
                <DetailWithImageLayout
                    rightsideData={
                        <ImageSection
                            imageData={{
                                src: '/images/components/detailSection/about-vision.png',
                                alt: 'Image of about our vision'
                            }}
                        />
                    }
                    leftsideData={
                        <DetailSection
                            detailData={{
                                title: 'About our Vision',
                                description: [
                                    'At Marine Dynamic Logistics, our vision is to become a leading global logistics partner known for reliability, innovation, and unmatched service excellence. We are committed to transforming supply chain experiences by delivering seamless, efficient, and technology-driven freight forwarding solutions that empower businesses to grow and compete globally.',
                                    'We strive to build a logistics ecosystem where transparency, trust, and exceptional customer care define every interaction. Through continuous improvement, strategic partnerships, and a forward-thinking approach, we aim to strengthen Pakistan’s role in international trade and set new benchmarks in logistics capabilities across land, sea, and air networks.'
                                ]
                            }}
                        />
                    }
                />
            </section>
        </InnerContainer>
    )
}

export default About