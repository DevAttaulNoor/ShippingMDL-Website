import { Routes } from "@constants/Routes";
import { InnerContainer } from "@layouts/InnerContainer";
import { HeroSection } from "@components/compound/HeroSection";
import { AnimatedBtn } from "@components/atomic/buttons/AnimatedBtn";

const Error = ({ errorData }) => {
    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: '/images/dummy.png',
                    title: errorData?.status + ' ' + errorData?.statusText
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: errorData?.statusText,
                        title: errorData?.statusText
                    },
                ]}
            />

            {/* Error Section */}
            <section className="w-full flex flex-col justify-center items-center gap-6 bg-white text-custom-blue">
                <div className="w-20 h-20 text-5xl font-bold rounded-full border-4 border-custom-green flex items-center justify-center animate-bounce text-custom-green">
                    !
                </div>

                <div className="flex flex-col items-center text-center gap-4">
                    <h1 className="titleStyle">{errorData?.status} Oops!</h1>
                    <p className="descriptionStyle">
                        {errorData?.error?.message}
                        <br />
                        Please try again or go back.
                    </p>
                </div>

                <AnimatedBtn
                    btnData={{
                        path: Routes.HOME.path,
                        text: 'Back to Home'
                    }}
                />
            </section>
        </InnerContainer>
    );
};

export default Error;
