import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { Routes } from "@constants/Routes"
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { HeadingWithLine } from "@components/compound/HeadingWithLine"

const Service = () => {
    const { slug } = useParams();
    const [services, setServices] = useState([]);
    const serviceData = services?.find(item => item.path === `/services/${slug}`);

    useEffect(() => {
        fetch("/data/Services.json")
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.error("Error loading services:", err));
    }, []);

    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: serviceData?.bgImage,
                    title: serviceData?.title,
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
                    {
                        path: serviceData?.path,
                        title: serviceData?.title
                    },
                ]}
            />

            {/* About the Service Section */}
            <section className="flex flex-col innerContainerPadding gap-5">
                <HeadingWithLine
                    title={serviceData?.title}
                />

                {serviceData?.description.map((desc, index) => (
                    <p
                        key={index}
                        className="descriptionStyle"
                    >
                        {desc}
                    </p>
                ))}
            </section>
        </InnerContainer>
    )
}

export default Service