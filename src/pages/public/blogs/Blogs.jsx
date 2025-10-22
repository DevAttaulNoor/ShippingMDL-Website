import { Routes } from "@constants/Routes"
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { BlogCard } from "@components/compound/cards/BlogCard";

const blogsData = [
    {
        id: 1,
        imgData: {
            src: '/images/dummy.png',
            alt: 'Image of the Future of Shipping'
        },
        date: '12/02/2025',
        title: 'The Future of Shipping',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique consequuntur alias, aut vero ipsum laudantium nemo est quaerat distinctio nesciunt, dolore nisi veritatis odio dolorem reiciendis ea a eius unde laboriosam eos dolores accusamus deleniti cum. Praesentium animi, nisi voluptates tenetur blanditiis totam quas, velit molestias officiis vitae architecto tempora. Soluta iure aut atque facilis voluptate minus. Vero magni quidem dignissimos beatae voluptatem laboriosam modi ab dolorum voluptates impedit. Libero, dolorum officiis tenetur temporibus voluptatem veritatis natus, sed vel officia ullam, qui praesentium a maxime.",
        btnData: {
            path: Routes.BLOG.path,
            text: 'Continue Reading',
            btnStyleClass: 'w-fit basicBtnStyle'
        },
    },
    {
        id: 2,
        imgData: {
            src: '/images/dummy.png',
            alt: 'Image of Understanding International Shipping'
        },
        date: '07/03/2025',
        title: 'Understanding International Shipping',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique consequuntur alias, aut vero ipsum laudantium nemo est quaerat distinctio nesciunt, dolore nisi veritatis odio dolorem reiciendis ea a eius unde laboriosam eos dolores accusamus deleniti cum. Praesentium animi, nisi voluptates tenetur blanditiis totam quas, velit molestias officiis vitae architecto tempora. Soluta iure aut atque facilis voluptate minus. Vero magni quidem dignissimos beatae voluptatem laboriosam modi ab dolorum voluptates impedit. Libero, dolorum officiis tenetur temporibus voluptatem veritatis natus, sed vel officia ullam, qui praesentium a maxime.",
        btnData: {
            path: Routes.BLOG.path,
            text: 'Continue Reading',
            btnStyleClass: 'w-fit basicBtnStyle'
        },
    },
    {
        id: 3,
        imgData: {
            src: '/images/dummy.png',
            alt: 'Image of Optimizing Supply Chain Efficiency'
        },
        date: '21/05/2025',
        title: 'Optimizing Supply Chain Efficiency',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique consequuntur alias, aut vero ipsum laudantium nemo est quaerat distinctio nesciunt, dolore nisi veritatis odio dolorem reiciendis ea a eius unde laboriosam eos dolores accusamus deleniti cum. Praesentium animi, nisi voluptates tenetur blanditiis totam quas, velit molestias officiis vitae architecto tempora. Soluta iure aut atque facilis voluptate minus. Vero magni quidem dignissimos beatae voluptatem laboriosam modi ab dolorum voluptates impedit. Libero, dolorum officiis tenetur temporibus voluptatem veritatis natus, sed vel officia ullam, qui praesentium a maxime.",
        btnData: {
            path: Routes.BLOG.path,
            text: 'Continue Reading',
            btnStyleClass: 'w-fit basicBtnStyle'
        },
    },
    {
        id: 4,
        imgData: {
            src: '/images/dummy.png',
            alt: 'Image of the Environmental Impact of Shipping'
        },
        date: '13/06/2025',
        title: 'The Environmental Impact of Shipping',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique consequuntur alias, aut vero ipsum laudantium nemo est quaerat distinctio nesciunt, dolore nisi veritatis odio dolorem reiciendis ea a eius unde laboriosam eos dolores accusamus deleniti cum. Praesentium animi, nisi voluptates tenetur blanditiis totam quas, velit molestias officiis vitae architecto tempora. Soluta iure aut atque facilis voluptate minus. Vero magni quidem dignissimos beatae voluptatem laboriosam modi ab dolorum voluptates impedit. Libero, dolorum officiis tenetur temporibus voluptatem veritatis natus, sed vel officia ullam, qui praesentium a maxime.",
        btnData: {
            path: Routes.BLOG.path,
            text: 'Continue Reading',
            btnStyleClass: 'w-fit basicBtnStyle'
        },
    },
    {
        id: 5,
        imgData: {
            src: '/images/dummy.png',
            alt: 'Image of Navigating Shipping Regulations and Compliance'
        },
        date: '28/10/2025',
        title: 'Navigating Shipping Regulations and Compliance',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique consequuntur alias, aut vero ipsum laudantium nemo est quaerat distinctio nesciunt, dolore nisi veritatis odio dolorem reiciendis ea a eius unde laboriosam eos dolores accusamus deleniti cum. Praesentium animi, nisi voluptates tenetur blanditiis totam quas, velit molestias officiis vitae architecto tempora. Soluta iure aut atque facilis voluptate minus. Vero magni quidem dignissimos beatae voluptatem laboriosam modi ab dolorum voluptates impedit. Libero, dolorum officiis tenetur temporibus voluptatem veritatis natus, sed vel officia ullam, qui praesentium a maxime.",
        btnData: {
            path: Routes.BLOG.path,
            text: 'Continue Reading',
            btnStyleClass: 'w-fit basicBtnStyle'
        },
    },
    {
        id: 6,
        imgData: {
            src: '/images/dummy.png',
            alt: 'Image of Choosing the Right Shipping Method for Your Business'
        },
        date: '30/11/2025',
        title: 'Choosing the Right Shipping Method for Your Business',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique consequuntur alias, aut vero ipsum laudantium nemo est quaerat distinctio nesciunt, dolore nisi veritatis odio dolorem reiciendis ea a eius unde laboriosam eos dolores accusamus deleniti cum. Praesentium animi, nisi voluptates tenetur blanditiis totam quas, velit molestias officiis vitae architecto tempora. Soluta iure aut atque facilis voluptate minus. Vero magni quidem dignissimos beatae voluptatem laboriosam modi ab dolorum voluptates impedit. Libero, dolorum officiis tenetur temporibus voluptatem veritatis natus, sed vel officia ullam, qui praesentium a maxime.",
        btnData: {
            path: Routes.BLOG.path,
            text: 'Continue Reading',
            btnStyleClass: 'w-fit basicBtnStyle'
        },
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
                            btnData: item.btnData
                        }}
                    />
                ))}
            </section>
        </InnerContainer>
    )
}

export default Blogs