import { Routes } from "@constants/Routes"
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { SwiperCarousel } from "@components/atomic/SwiperCarousel"
import { ServiceCard } from "@components/compound/cards/ServiceCard"
import { DetailWithImageLayout } from "@layouts/DetailWithImageLayout"
import { DetailSection } from "@components/compound/detailsection-related/DetailSection"
import { ImageSection } from "@components/compound/detailsection-related/ImageSection"

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
                    btnStyleClass: 'w-fit basicBtnStyle',
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
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a autem vel labore rerum consectetur aliquam quaerat totam assumenda quia, error neque et omnis modi maiores, eaque molestiae porro quos ad sequi! Dignissimos velit dolorum, assumenda aspernatur fugiat quos repellendus enim, alias delectus aliquid a perferendis recusandae architecto.',
                                'Adipisci corrupti eligendi porro alias, cupiditate officiis nihil dolor nulla at, quae ducimus atque odit voluptates sit. Ratione, eum. Nostrum quasi autem debitis facere nesciunt dolores magni explicabo rem, ut quod totam suscipit, Eos quo repellat impedit accusantium, sint voluptatibus repellendus necessitatibus placeat ipsum iusto praesentium, vero, fugiat accusamus.'
                            ],
                            btnData: {
                                btnStyleClass: 'w-fit basicBtnStyle',
                                text: 'Read More',
                                path: Routes.ABOUT.path
                            }
                        }}
                    />
                }
            />

            {/* Qualities Section */}
            <SwiperCarousel
                swiperContainerStyle="!py-16 text-white bg-custom-blue"
                swiperStates={{
                    loop: true,
                    slidesPerView: 4,
                    spaceBetween: 20,
                    pagination: false,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
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

            {/* Services Section */}
            <section className="grid grid-cols-2 innerContainerPadding gap-15">
                <ServiceCard
                    cardContainerStyle='h-96'
                    cardData={{
                        bgImage: '/images/components/serviceSection/land-freight.png',
                        title: 'Land Freight',
                        description:
                            'Reliable overland transportation solutions ensuring secure, cost-effective, and on-time delivery of your goods across major national and regional routes.',
                        btnData: {
                            text: 'Learn More',
                            path: Routes.SERVICE_LAND_FREIGHT.path,
                            btnStyleClass: 'w-fit basicBtnStyle'
                        }
                    }}
                />

                <ServiceCard
                    cardContainerStyle='h-96'
                    cardData={{
                        bgImage: '/images/components/serviceSection/sea-freight.png',
                        title: 'Sea Freight',
                        description:
                            'Comprehensive ocean freight solutions with global coverage, efficient routing, and cost-optimized shipping for all cargo sizes and types.',
                        btnData: {
                            text: 'Learn More',
                            path: Routes.SERVICE_SEA_FREIGHT.path,
                            btnStyleClass: 'w-fit basicBtnStyle'
                        }
                    }}
                />

                <ServiceCard
                    cardContainerStyle='h-96'
                    cardData={{
                        bgImage: '/images/components/serviceSection/air-freight.png',
                        title: 'Air Freight',
                        description:
                            'Fast, secure, and dependable air freight services designed to move your cargo globally with precision and efficiency.',
                        btnData: {
                            text: 'Learn More',
                            path: Routes.SERVICE_AIR_FREIGHT.path,
                            btnStyleClass: 'w-fit basicBtnStyle'
                        }
                    }}
                />

                <ServiceCard
                    cardContainerStyle='h-96'
                    cardData={{
                        bgImage: '/images/components/serviceSection/custom-clearance.png',
                        title: 'Custom Clearance',
                        description:
                            'Expert customs brokerage and clearance support to ensure smooth, compliant, and delay-free import and export operations.',
                        btnData: {
                            text: 'Learn More',
                            path: Routes.SERVICE_CUSTOM_CLEARANCE.path,
                            btnStyleClass: 'w-fit basicBtnStyle'
                        }
                    }}
                />

                <ServiceCard
                    cardContainerStyle='h-96'
                    cardData={{
                        bgImage: '/images/components/serviceSection/dg-cargo.png',
                        title: 'DG Cargo',
                        description:
                            'Safe and compliant handling of dangerous goods cargo with certified processes that meet international transport regulations.',
                        btnData: {
                            text: 'Learn More',
                            path: Routes.SERVICE_DG_CARGO.path,
                            btnStyleClass: 'w-fit basicBtnStyle'
                        }
                    }}
                />

                <ServiceCard
                    cardContainerStyle='h-96'
                    cardData={{
                        bgImage: '/images/components/serviceSection/transit-trade.png',
                        title: 'Transit Trade',
                        description:
                            'Seamless cross-border transit trade solutions ensuring efficient documentation, routing, and delivery across global logistics corridors.',
                        btnData: {
                            text: 'Learn More',
                            path: Routes.SERVICE_TRANSIT_TRADE.path,
                            btnStyleClass: 'w-fit basicBtnStyle'
                        }
                    }}
                />
            </section>
        </InnerContainer>
    )
}

export default Home