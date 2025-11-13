import { Routes } from "@constants/Routes"
import { useFetch } from "@hooks/useFetch"
import { InnerContainer } from "@layouts/InnerContainer"
import { Accordion } from "@components/atomic/Accordion"
import { HeroSection } from "@components/compound/HeroSection"

const Faqs = () => {
    const { data } = useFetch("/data/Faqs.json");

    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: '/images/components/heroSection/home.jpg',
                    title: 'Frequently Asked Questions',
                    description: "Find quick answers to the most common questions about our logistics and freight services. Explore the FAQs below to understand our process, policies, and support options with ease."
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.FAQ.path,
                        title: Routes.FAQ.title
                    },
                ]}
            />

            {/* Faqs Section */}
            <section className="innerContainerPadding">
                <Accordion
                    accordionData={data}
                />
            </section>
        </InnerContainer>
    )
}

export default Faqs