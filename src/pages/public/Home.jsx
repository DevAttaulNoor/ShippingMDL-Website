import { Routes } from "@constants/Routes"
import { useFetch } from "@hooks/useFetch"
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { SwiperCarousel } from "@components/atomic/SwiperCarousel"
import { ServiceCard } from "@components/compound/cards/ServiceCard"
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

            {/* Aboutus Section */}
            <DetailWithImageLayout
                detailContainerStyleClass="innerContainerPadding"
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
                            ],
                            btnData: {
                                text: 'Read More',
                                path: Routes.ABOUT.path
                            }
                        }}
                    />
                }
            />

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
                        <div
                            key={index}
                            className="flex flex-col items-center py-3 gap-2 sm:py-2.5 md:py-2 lg:py-1.5 xl:py-1 2xl:py-0"
                        >
                            <img
                                src={item.image.src}
                                alt={item.image.alt}
                                className="w-28 object-contain invert"
                            />

                            <div>
                                <h5 className='text-lg font-medium'>{item.title}</h5>
                                <p className="text-sm opacity-75">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </SwiperCarousel>
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
        </InnerContainer>
    )
}

export default Home