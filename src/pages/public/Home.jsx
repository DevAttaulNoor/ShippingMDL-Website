import { Routes } from "@constants/Routes"
import { useFetch } from "@hooks/useFetch"
import { InnerContainer } from "@layouts/InnerContainer"
import { BasicBtn } from "@components/atomic/buttons/BasicBtn"
import { HeroSection } from "@components/compound/HeroSection"
import { SwiperCarousel } from "@components/atomic/SwiperCarousel"
import { ServiceCard } from "@components/compound/cards/ServiceCard"
import { QualityCard } from "@components/compound/cards/QualityCard"
import { DetailWithImageLayout } from "@layouts/DetailWithImageLayout"
import { ImageSection } from "@components/compound/detailsection-related/ImageSection"
import { DetailSection } from "@components/compound/detailsection-related/DetailSection"
import { HeadingWithDescription } from "@components/compound/headings/HeadingWithDescription"

const Home = () => {
    const { data: servicesData } = useFetch("/data/Services.json");
    const { data: qualitiesData } = useFetch("/data/Qualities.json");

    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                containerStyle="justify-end xs:justify-center"
                heroData={{
                    bgImage: '/images/components/heroSection/home.png',
                    title: 'We make Strongest Services all over the World',
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate atque vitae cupiditate, ipsam incidunt fuga consequatur commodi soluta iure odit ratione quos unde pariatur quaerat exercitationem maxime laborum autem!"
                }}
                btnData={{
                    text: Routes.SERVICES.title,
                    path: Routes.SERVICES.path
                }}
            />

            {/* What You Can Expect From Us Section */}
            <section className="innerContainerPadding">
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

            {/* How Our Logistics Process Works Section */}
            <section className="innerContainerPadding">
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
                    {servicesData?.map((data, index) => (
                        <ServiceCard
                            key={index}
                            cardContainerStyle='h-56 xs:w-[80%] xs:mx-auto xs:h-60 sm:w-full md:h-72 xl:h-80 2xl:h-96'
                            cardData={{
                                bgImage: data.image?.src,
                                path: data.path,
                                title: data.title,
                                description: data.description,
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

export default Home