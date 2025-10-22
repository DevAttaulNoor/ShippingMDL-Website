import { Routes } from "@constants/Routes"
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { ServiceCard } from "@components/compound/cards/ServiceCard"

const Services = () => {
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

export default Services