import { Routes } from "@constants/Routes"
import { useFetch } from "@hooks/useFetch"
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { SwiperCarousel } from "@components/atomic/SwiperCarousel"
import { QualityCard } from "@components/compound/cards/QualityCard"
import { DetailWithImageLayout } from "@layouts/DetailWithImageLayout"
import { ImageSection } from "@components/compound/detailsection-related/ImageSection"
import { DetailSection } from "@components/compound/detailsection-related/DetailSection"
import { HeadingWithDescription } from "@components/compound/headings/HeadingWithDescription"

const About = () => {
    const { data: qualitiesData } = useFetch("/data/Qualities.json");

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

            {/* About our Vision Section */}
            <section className="innerContainerPadding">
                <DetailWithImageLayout
                    rightsideData={
                        <DetailSection
                            detailData={{
                                title: 'Our Vision',
                                description: [
                                    'At Marine Dynamic Logistics, our vision is to become a leading global logistics partner known for reliability, innovation, and unmatched service excellence. We are committed to transforming supply chain experiences by delivering seamless, efficient, and technology-driven freight forwarding solutions that empower businesses to grow and compete globally.',
                                    'We strive to build a logistics ecosystem where transparency, trust, and exceptional customer care define every interaction. Through continuous improvement, strategic partnerships, and a forward-thinking approach, we aim to strengthen Pakistan’s role in international trade and set new benchmarks in logistics capabilities across land, sea, and air networks.'
                                ]
                            }}
                        />
                    }
                    leftsideData={
                        <ImageSection
                            imageData={{
                                src: '/images/components/detailSection/about-vision.png',
                                alt: 'Image of about our vision'
                            }}
                        />
                    }
                />
            </section>

            {/* Core Values Section */}
            <section className="sectionStyle">
                <HeadingWithDescription
                    containerStyle='text-center innerContainerPadding'
                    heading={{
                        title: 'Core Values'
                    }}
                    description={"We deliver excellence through commitment, innovation, and trusted logistics solutions."}
                />

                <SwiperCarousel
                    swiperContainerStyle="carouselPadding text-white bg-custom-blue"
                    swiperStates={{
                        loop: true,
                        pagination: true,
                        autoplay: {
                            delay: 2000,
                            disableOnInteraction: false,
                        },
                        breakpoints: {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            450: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1440: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }
                    }}
                >
                    {qualitiesData?.map((item, index) => (
                        <QualityCard
                            key={index}
                            cardData={{
                                image: {
                                    src: item.image.src,
                                    alt: item.image.alt,
                                },
                                title: item.title,
                                description: item.description
                            }}
                        />
                    ))}
                </SwiperCarousel>
            </section>

            {/* About our Mission Section */}
            <section className="innerContainerPadding">
                <DetailWithImageLayout
                    rightsideData={
                        <ImageSection
                            imageData={{
                                src: '/images/components/detailSection/about-mission.png',
                                alt: 'Image of about our mission'
                            }}
                        />
                    }
                    leftsideData={
                        <DetailSection
                            detailData={{
                                title: 'Our Mission',
                                description: [
                                    'At Marine Dynamic Logistics, our mission is to provide seamless, reliable, and technology-driven freight forwarding solutions that empower businesses to move goods across the globe with confidence. We are committed to ensuring every shipment — whether by air, sea, or land — reaches its destination safely, on time, and with complete transparency.',
                                    'Our mission is built on four pillars:'
                                ],
                                list: [
                                    'Delivering consistent, dependable logistics services that our clients can trust.',
                                    'Streamlining processes to reduce delays, minimize costs, and enhance efficiency.',
                                    'Offering personalized logistics solutions tailored to the unique needs of every business.',
                                    'Continuously improving our systems, investing in smart technology, and expanding our global network to strengthen supply chains worldwide.'
                                ]
                            }}
                        />
                    }
                />
            </section>

            {/* About the President Section */}
            <section className="innerContainerPadding">
                <DetailWithImageLayout
                    rightsideData={
                        <DetailSection
                            detailData={{
                                title: 'About Our President',
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
        </InnerContainer>
    )
}

export default About