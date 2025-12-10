import { useParams } from "react-router"
import { Routes } from "@constants/Routes"
import { useFetch } from "@hooks/useFetch"
import { usePageMeta } from "@hooks/usePageMeta"
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { HeadingWithLine } from "@components/compound/headings/HeadingWithLine"

const Service = () => {
    const { slug } = useParams();
    const { data } = useFetch("/data/Services.json");
    const serviceData = data?.find(item => item.path === `/services/${slug}`);

    usePageMeta(
        serviceData?.meta?.title,
        serviceData?.meta?.description
    );

    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: serviceData?.image?.src,
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
            <section className="flex flex-col gap-2 innerContainerPadding md:gap-3 xl:gap-4">
                <HeadingWithLine
                    title={serviceData?.title}
                />

                {serviceData?.paragraphs.map((desc, index) => (
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