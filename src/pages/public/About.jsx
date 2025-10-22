import { Routes } from "@constants/Routes"
import { InnerContainer } from "@layouts/InnerContainer"
import { HeroSection } from "@components/compound/HeroSection"
import { DetailWithImageLayout } from "@layouts/DetailWithImageLayout"
import { ImageSection } from "@components/compound/detailsection-related/ImageSection"
import { DetailSection } from "@components/compound/detailsection-related/DetailSection"

const About = () => {
    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: '/images/components/heroSection/about.png',
                    title: 'About Us'
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.ABOUT.path,
                        title: Routes.ABOUT.title
                    },
                ]}
            />

            {/* About the Company Section */}
            <DetailWithImageLayout
                detailContainerStyleClass="innerContainerPadding"
                rightsideData={
                    <ImageSection
                        imageData={{
                            src: '/images/dummy.png',
                            alt: 'Image of about our company'
                        }}
                    />
                }
                leftsideData={
                    <DetailSection
                        detailData={{
                            title: 'About our Company',
                            description: [
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a autem vel labore rerum consectetur aliquam quaerat totam assumenda quia, error neque et omnis modi maiores, eaque molestiae porro quos ad sequi! Dignissimos velit dolorum, assumenda aspernatur fugiat quos repellendus enim, alias delectus aliquid a perferendis recusandae architecto.',
                                'Adipisci corrupti eligendi porro alias, cupiditate officiis nihil dolor nulla at, quae ducimus atque odit voluptates sit. Ratione, eum. Nostrum quasi autem debitis facere nesciunt dolores magni explicabo rem, ut quod totam suscipit, Eos quo repellat impedit accusantium, sint voluptatibus repellendus necessitatibus placeat ipsum iusto praesentium, vero, fugiat accusamus.'
                            ],
                            btnData: {
                                btnStyleClass: 'w-fit basicBtnStyle',
                                text: 'Read More',
                                path: Routes.ABOUT.path
                            }
                        }}
                    />
                }
            />

            {/* About the President Section */}
            <DetailWithImageLayout
                detailContainerStyleClass="innerContainerPadding"
                rightsideData={
                    <DetailSection
                        detailData={{
                            title: 'About our President',
                            description: [
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a autem vel labore rerum consectetur aliquam quaerat totam assumenda quia, error neque et omnis modi maiores, eaque molestiae porro quos ad sequi! Dignissimos velit dolorum, assumenda aspernatur fugiat quos repellendus enim, alias delectus aliquid a perferendis recusandae architecto.',
                                'Adipisci corrupti eligendi porro alias, cupiditate officiis nihil dolor nulla at, quae ducimus atque odit voluptates sit. Ratione, eum. Nostrum quasi autem debitis facere nesciunt dolores magni explicabo rem, ut quod totam suscipit, Eos quo repellat impedit accusantium, sint voluptatibus repellendus necessitatibus placeat ipsum iusto praesentium, vero, fugiat accusamus.'
                            ],
                            btnData: {
                                btnStyleClass: 'w-fit basicBtnStyle',
                                text: 'Read More',
                                path: Routes.ABOUT.path
                            }
                        }}
                    />

                }
                leftsideData={
                    <ImageSection
                        imageData={{
                            src: '/images/dummy.png',
                            alt: 'Image of about our president'
                        }}
                    />
                }
            />

            {/* About our Vision Section */}
            <DetailWithImageLayout
                detailContainerStyleClass="innerContainerPadding"
                rightsideData={
                    <ImageSection
                        imageData={{
                            src: '/images/dummy.png',
                            alt: 'Image of about our vision'
                        }}
                    />
                }
                leftsideData={
                    <DetailSection
                        detailData={{
                            title: 'About our Vision',
                            description: [
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a autem vel labore rerum consectetur aliquam quaerat totam assumenda quia, error neque et omnis modi maiores, eaque molestiae porro quos ad sequi! Dignissimos velit dolorum, assumenda aspernatur fugiat quos repellendus enim, alias delectus aliquid a perferendis recusandae architecto.',
                                'Adipisci corrupti eligendi porro alias, cupiditate officiis nihil dolor nulla at, quae ducimus atque odit voluptates sit. Ratione, eum. Nostrum quasi autem debitis facere nesciunt dolores magni explicabo rem, ut quod totam suscipit, Eos quo repellat impedit accusantium, sint voluptatibus repellendus necessitatibus placeat ipsum iusto praesentium, vero, fugiat accusamus.'
                            ],
                            btnData: {
                                btnStyleClass: 'w-fit basicBtnStyle',
                                text: 'Read More',
                                path: Routes.ABOUT.path
                            }
                        }}
                    />
                }
            />
        </InnerContainer>
    )
}

export default About