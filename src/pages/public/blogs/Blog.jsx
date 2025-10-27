import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Routes } from "@constants/Routes";
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection";

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

            {/* About the Blog Section */}
            <section className="flex flex-col innerContainerPadding gap-5">
                <h1 className="text-center text-5xl font-semibold">{blogData?.date}</h1>
                <h1 className="text-center text-5xl font-semibold">{blogData?.title}</h1>

                {blogData?.description.map((desc, index) => (
                    <p
                        key={index}
                        className="text-lg"
                    >
                        {desc}
                    </p>
                ))}
            </section>
        </InnerContainer>
    )
}

export default Blog