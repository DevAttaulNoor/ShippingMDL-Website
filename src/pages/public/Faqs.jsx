import { Routes } from "@constants/Routes"
import { InnerContainer } from "@layouts/InnerContainer"
import { Accordion } from "@components/atomic/Accordion"
import { HeroSection } from "@components/compound/HeroSection"

export const accordionData = [
    {
        question: "What is MDL abbreviation?",
        answer: " MDL stands for Modern Development Logistics. It is a logistics and freight forwarding company offering end-to-end transport solutions, including air, sea, and land freight. MDL focuses on delivering efficient, reliable, and cost-effective logistics services for both domestic and international clients.",
    },
    {
        question: "How many services does MDL provide?",
        answer: "MDL provides six core logistics services: Land Freight, Air Freight, Sea Freight, Customs Brokerage, Project Cargo Handling, and Warehousing & Distribution. Each service is managed by experienced professionals to ensure timely delivery, transparency, and seamless operations.",
    },
    {
        question: "Does MDL have PIFFA membership?",
        answer: "Yes, MDL is a proud member of the Pakistan International Freight Forwarders Association (PIFFA). This membership signifies our compliance with global logistics standards, credibility in international freight forwarding, and our commitment to providing professional and ethical logistics solutions.",
    },
    {
        id: 4,
        question: "Is MDL a Pakistan-based company?",
        answer: "Yes, MDL is a Pakistan-based logistics company with its head office located in Karachi and operational networks across major cities and ports in the country. While based in Pakistan, MDL serves clients worldwide through strategic partnerships trusted network of international agents.",
    },
    {
        id: 5,
        question: "When was MDL founded?",
        answer: "MDL was founded in 2019 with a vision to modernize the logistics sector in Pakistan by offering efficient, technology-driven supply chain solutions. Since its inception, MDL has rapidly grown into a trusted name in freight forwarding, recognized for reliability, innovation, and customer satisfaction.",
    },
];

const Faqs = () => {
    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: '/images/components/heroSection/home.jpg',
                    title: 'Frequently Asked Questions'
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
            <section className="flex flex-col innerContainerPadding gap-10">
                <h1 className="text-center text-5xl font-semibold">Frequently Asked Questions</h1>

                <Accordion
                    accordionData={accordionData}
                />
            </section>
        </InnerContainer>
    )
}

export default Faqs