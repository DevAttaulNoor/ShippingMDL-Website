import { Routes } from "@constants/Routes"
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { ServiceCard } from "@components/compound/cards/ServiceCard"
import { HeadingWithDescription } from "@components/compound/headings/HeadingWithDescription";

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
                            cardContainerStyle='h-56 xs:w-[80%] xs:mx-auto xs:h-60 sm:w-full md:h-72 xl:h-80 2xl:h-96'
                            cardData={{
                                bgImage: data.bgImage,
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

export default Services