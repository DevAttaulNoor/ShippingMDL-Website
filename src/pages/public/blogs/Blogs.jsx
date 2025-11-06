import { Routes } from "@constants/Routes"
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { BlogCard } from "@components/compound/cards/BlogCard";

const blogsData = [
    {
        id: 1,
        path: "/blogs/the-future-of-shipping",
        imgData: {
            src: "/images/dummy.png",
            alt: "Image of the Future of Shipping",
        },
        date: "12/02/2025",
        title: "The Future of Shipping",
        description: [
            "The shipping industry is undergoing a revolutionary transformation driven by automation, sustainability, and digitalization. As global trade expands, logistics providers are embracing smart technologies to optimize routes, reduce emissions, and improve visibility. Innovations such as autonomous vessels, AI-driven analytics, and blockchain-based tracking are redefining how goods are transported worldwide.",
            "These advancements are not only making supply chains more efficient but also addressing environmental concerns. Green fuels and hybrid propulsion systems are helping companies move toward carbon neutrality. Moreover, digital twins and predictive maintenance are minimizing downtime and improving safety standards across fleets.",
        ],
    },
    {
        id: 2,
        path: "/blogs/understanding-international-shipping",
        imgData: {
            src: "/images/dummy.png",
            alt: "Image of Understanding International Shipping",
        },
        date: "07/03/2025",
        title: "Understanding International Shipping",
        description: [
            "International shipping forms the backbone of global commerce, connecting suppliers, manufacturers, and consumers across continents. Whether you’re shipping bulk cargo or small packages, understanding incoterms, documentation, and regulations is crucial for smooth cross-border movement.",
            "Every country has its own customs protocols, duties, and restrictions that can affect delivery timelines. Working with experienced freight forwarders and customs brokers helps businesses navigate these complexities with minimal risk and delay. Proper labeling, documentation accuracy, and compliance with international standards are key factors in avoiding penalties.",
        ],
    },
    {
        id: 3,
        path: "/blogs/optimizing-supply-chain-efficiency",
        imgData: {
            src: "/images/dummy.png",
            alt: "Image of Optimizing Supply Chain Efficiency",
        },
        date: "21/05/2025",
        title: "Optimizing Supply Chain Efficiency",
        description: [
            "In today’s fast-paced business environment, supply chain efficiency is essential to maintaining profitability and customer satisfaction. By leveraging real-time data, automation, and predictive analytics, companies can anticipate disruptions, reduce lead times, and streamline logistics operations.",
            "An optimized supply chain not only minimizes operational costs but also enhances agility — enabling businesses to adapt quickly to market fluctuations. Technologies such as warehouse automation, RFID tracking, and advanced route planning are revolutionizing inventory management and distribution networks.",
        ],
    },
    {
        id: 4,
        path: "/blogs/environmental-impact-of-shipping",
        imgData: {
            src: "/images/dummy.png",
            alt: "Image of the Environmental Impact of Shipping",
        },
        date: "13/06/2025",
        title: "The Environmental Impact of Shipping",
        description: [
            "The shipping industry plays a vital role in the global economy, but it also contributes significantly to greenhouse gas emissions and ocean pollution. As environmental concerns rise, the sector is under pressure to adopt cleaner and more sustainable practices.",
            "Innovations in alternative fuels such as LNG, methanol, and biofuels are reducing carbon emissions, while the introduction of electric and hybrid vessels marks a new era in maritime sustainability. Regulatory frameworks like IMO 2020 are pushing companies to adopt greener technologies and improve fuel efficiency.",
        ],
    },
    {
        id: 5,
        path: "/blogs/navigating-shipping-regulations",
        imgData: {
            src: "/images/dummy.png",
            alt: "Image of Navigating Shipping Regulations and Compliance",
        },
        date: "28/10/2025",
        title: "Navigating Shipping Regulations and Compliance",
        description: [
            "Global shipping is heavily regulated, with numerous international, regional, and national laws governing operations, safety, and environmental standards. Compliance with these regulations ensures the smooth flow of trade and prevents costly legal complications.",
            "From customs documentation to hazardous material handling, each step requires strict adherence to established standards. The International Maritime Organization (IMO) sets global conventions such as SOLAS and MARPOL, which aim to enhance safety and reduce pollution at sea.",
        ],
    },
    {
        id: 6,
        path: "/blogs/choosing-right-shipping-method",
        imgData: {
            src: "/images/dummy.png",
            alt: "Image of Choosing the Right Shipping Method for Your Business",
        },
        date: "30/11/2025",
        title: "Choosing the Right Shipping Method for Your Business",
        description: [
            "Selecting the most suitable shipping method is crucial for balancing cost, speed, and reliability. Each mode — air, sea, or land — offers unique advantages depending on the nature of your goods, delivery timelines, and budget constraints.",
            "Air freight is ideal for time-sensitive and high-value items, while sea freight offers cost-effective solutions for bulk cargo. Land transport remains vital for regional and cross-border logistics. Understanding these trade-offs helps businesses design efficient logistics strategies tailored to their needs.",
        ],
    },
];

const Blogs = () => {
    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: '/images/components/heroSection/blog.jpg',
                    title: 'Blogs'
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.BLOGS.path,
                        title: Routes.BLOGS.title
                    },
                ]}
            />

            {/* Blogs Sections */}
            <section className="innerContainerStyle innerContainerPadding">
                {blogsData.map(item => (
                    <BlogCard
                        key={item.id}
                        cardData={{
                            imgData: item.imgData,
                            date: item.date,
                            title: item.title,
                            description: item.description,
                            btnData: {
                                path: item.path,
                                text: 'Continue Reading',
                                btnStyleClass: 'w-fit basicBtnStyle'
                            }
                        }}
                    />
                ))}
            </section>
        </InnerContainer>
    )
}

export default Blogs