import { Link } from "react-router"
import { Routes } from "@constants/Routes"
import { InnerContainer } from "@layouts/InnerContainer"
import { DetailWithImageLayout } from "@layouts/DetailWithImageLayout"
import { DetailSection } from "@components/universal/detailsection-related/DetailSection"
import { ImageSection } from "@components/universal/detailsection-related/ImageSection"
import dummyImage from '/images/dummy.png'
import heroImage from '/images/components/heroSection/home.jpg'

const Home = () => {
    return (
        <InnerContainer>
            <div className="carousel-item active">
                <img
                    src={heroImage}
                    alt={'Image of shipping container on a ship at sea'}
                    className="w-full h-full object-contain"
                />

                <div className="">
                    <h1 className="fw-bold text-uppercase mb-3">
                        We Make the Strongest<span>Services</span> All Over the World
                    </h1>

                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate
                        atque vitae cupiditate, ipsam incidunt fuga consequatur commodi soluta iure odit ratione
                        quos unde pariatur quaerat exercitationem maxime laborum autem!
                    </p>

                    <Link
                        to={Routes.SERVICES.path}
                        className=""
                    >
                        {Routes.SERVICES.title}
                    </Link>
                </div>
            </div>

            <DetailWithImageLayout
                detailContainerStyleClass=""

                rightsideData={
                    <ImageSection
                        imageContainerStyleClass=""
                        imageData={{
                            src: dummyImage,
                            alt: 'Image of about our company'
                        }}
                    />
                }

                leftsideData={
                    <DetailSection
                        detailContainerStyleClass=""
                        detailData={{
                            title: 'About our Company',
                            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a autem vel labore rerum consectetur aliquam quaerat totam assumenda quia, error neque et omnis modi maiores, eaque molestiae porro quos ad sequi! Dignissimos velit dolorum, assumenda aspernatur fugiat quos repellendus enim, alias delectus aliquid a perferendis recusandae architecto. Adipisci corrupti eligendi porro alias, cupiditate officiis nihil dolor nulla at, quae ducimus atque odit voluptates sit. Ratione, eum. Nostrum quasi autem debitis facere nesciunt dolores magni explicabo rem, ut quod totam suscipit, Eos quo repellat impedit accusantium, sint voluptatibus repellendus necessitatibus placeat ipsum iusto praesentium, vero, fugiat accusamus.",
                            btnData: {
                                text: 'Read More',
                                path: Routes.ABOUT.path
                            },
                            btnStyleClass: ''
                        }}
                    />
                }
            />
        </InnerContainer>
    )
}

export default Home