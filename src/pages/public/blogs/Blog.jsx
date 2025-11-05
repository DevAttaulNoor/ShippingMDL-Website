import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Routes } from "@constants/Routes";
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection";
import { HeadingWithLine } from "@components/compound/headings/HeadingWithLine";

const Blog = () => {
    const { slug } = useParams();
    const [blogs, setBlogs] = useState([]);
    const blogData = blogs?.find(item => item.path === `/blogs/${slug}`);

    useEffect(() => {
        fetch("/data/Blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((err) => console.error("Error loading blogs:", err));
    }, []);

    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: blogData?.bgImage,
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
            <section className="sectionStyle innerContainerPadding">
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