import { Routes } from "@constants/Routes"
import { useFetch } from "@hooks/useFetch";
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { ServiceCard } from "@components/compound/cards/ServiceCard"
import { HeadingWithDescription } from "@components/compound/headings/HeadingWithDescription";

const Services = () => {
    const { data } = useFetch("/data/Services.json");

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
        </InnerContainer>
    )
}

export default Services