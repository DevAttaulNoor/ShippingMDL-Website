import { useParams } from "react-router";
import { Routes } from "@constants/Routes";
import { useFetch } from "@hooks/useFetch";
import { usePageMeta } from "@hooks/usePageMeta";
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection";
import { HeadingWithLine } from "@components/compound/headings/HeadingWithLine";

const Blog = () => {
    const { slug } = useParams();
    const { data } = useFetch("/data/Blogs.json")
    const blogData = data?.find(item => item.path === `/blogs/${slug}`);

    usePageMeta(
        blogData?.meta?.title,
        blogData?.meta?.description
    );

    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: blogData?.image?.src,
                    title: blogData?.title,
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
                    {
                        path: blogData?.path,
                        title: blogData?.title
                    },
                ]}
            />

            {/* Blog Section */}
            <section className="flex flex-col gap-2 innerContainerPadding md:gap-3 xl:gap-4">
                <HeadingWithLine
                    title={blogData?.title}
                />

                {blogData?.description.map((desc, index) => (
                    <p
                        key={index}
                        className="descriptionStyle"
                    >
                        {desc}
                    </p>
                ))}

                <p className="text-end text-sm opacity-75 italic text-custom-blue">
                    Published: {blogData?.date}
                </p>
            </section>
        </InnerContainer>
    )
}

export default Blog