import { Routes } from "@constants/Routes"
import { useFetch } from "@hooks/useFetch";
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { BlogCard } from "@components/compound/cards/BlogCard"

const Blogs = () => {
    const { data } = useFetch("/data/Blogs.json")

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
                {data?.map(item => (
                    <BlogCard
                        key={item.id}
                        cardData={{
                            imgData: item.image,
                            date: item.date,
                            title: item.title,
                            description: item.description.slice(0, 2),
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