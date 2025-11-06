import { Routes } from "@constants/Routes"
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { SwiperCarousel } from "@components/atomic/SwiperCarousel"
import { ServiceCard } from "@components/compound/cards/ServiceCard"
import { DetailWithImageLayout } from "@layouts/DetailWithImageLayout"
import { DetailSection } from "@components/compound/detailsection-related/DetailSection"
import { ImageSection } from "@components/compound/detailsection-related/ImageSection"
import { HeadingWithDescription } from "@components/compound/headings/HeadingWithDescription"

const qualitiesData = [
    {
        title: 'Communication',
        imgData: {
            src: '/images/components/qualitySection/communication.png',
            alt: 'Icon of Communication'
        },
    },
    {
        title: 'Customer Satisfaction',
        imgData: {
            src: '/images/components/qualitySection/customer-satisfaction.png',
            alt: 'Icon of Customer Satisfaction'
        },
    },
    {
        title: 'Honesty',
        imgData: {
            src: '/images/components/qualitySection/honesty.png',
            alt: 'Icon of Honesty'
        },
    },
    {
        title: 'Innovation',
        imgData: {
            src: '/images/components/qualitySection/innovation.png',
            alt: 'Icon of Innovation'
        },
    },
    {
        title: 'Management',
        imgData: {
            src: '/images/components/qualitySection/management.png',
            alt: 'Icon of Management'
        },
    },
    {
        title: 'Quality',
        imgData: {
            src: '/images/components/qualitySection/quality.png',
            alt: 'Icon of Quality'
        },
    },
];

const servicesData = [
    {
        bgImage: '/images/components/serviceSection/land-freight.png',
        title: 'Land Freight',
        description:
            'Reliable overland transportation solutions ensuring secure, cost-effective, and on-time delivery of your goods across major national and regional routes.',
        path: Routes.SERVICE_LAND_FREIGHT.path,
    },
    {
        bgImage: '/images/components/serviceSection/sea-freight.png',
        title: 'Sea Freight',
        description:
            'Comprehensive ocean freight solutions with global coverage, efficient routing, and cost-optimized shipping for all cargo sizes and types.',
        path: Routes.SERVICE_SEA_FREIGHT.path,
    },
    {
        bgImage: '/images/components/serviceSection/air-freight.png',
        title: 'Air Freight',
        description:
            'Fast, secure, and dependable air freight services designed to move your cargo globally with precision and efficiency.',
        path: Routes.SERVICE_AIR_FREIGHT.path,
    },
    {
        bgImage: '/images/components/serviceSection/custom-clearance.png',
        title: 'Custom Clearance',
        description:
            'Expert customs brokerage and clearance support to ensure smooth, compliant, and delay-free import and export operations.',
        path: Routes.SERVICE_CUSTOM_CLEARANCE.path,
    },
    {
        bgImage: '/images/components/serviceSection/dg-cargo.png',
        title: 'DG Cargo',
        description:
            'Safe and compliant handling of dangerous goods cargo with certified processes that meet international transport regulations.',
        path: Routes.SERVICE_DG_CARGO.path,
    },
    {
        bgImage: '/images/components/serviceSection/transit-trade.png',
        title: 'Transit Trade',
        description:
            'Seamless cross-border transit trade solutions ensuring efficient documentation, routing, and delivery across global logistics corridors.',
        path: Routes.SERVICE_TRANSIT_TRADE.path,
    },
];

const Home = () => {
    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: '/images/components/heroSection/home.jpg',
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
                            src: '/images/dummy.png',
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

            {/* Qualities Section */}
            <section className="sectionStyle">
                <HeadingWithDescription
                    containerStyle='text-center innerContainerPadding'
                    heading={{
                        title: 'Our Qualities'
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
                    {qualitiesData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2"
                        >
                            <img
                                src={item.imgData.src}
                                alt={item.imgData.alt}
                                className="w-28 object-contain invert"
                            />

                            <h5 className='text-lg font-medium'>{item.title}</h5>
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
                    {servicesData.map((data, index) => (
                        <ServiceCard
                            key={index}
                            cardContainerStyle='h-60'
                            cardData={{
                                bgImage: data.bgImage,
                                title: data.title,
                                description: data.description,
                                btnData: {
                                    text: 'Learn More',
                                    path: data.path,
                                    btnStyleClass: 'underline-offset-1 decoration-custom-green hover:underline'
                                }
                            }}
                        />
                    ))}
                </div>
            </section>
        </InnerContainer>
    )
}

export default Home