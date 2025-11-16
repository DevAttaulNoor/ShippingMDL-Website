import { Breadcrumb } from "@components/atomic/Breadcrumb"
import { BasicBtn } from "@components/atomic/buttons/BasicBtn"

export const HeroSection = ({ containerStyle = 'justify-center', heroData, btnData, breadcrumbData }) => {
    return (
        <div
            style={{ backgroundImage: `url(${heroData.bgImage})` }}
            className={`relative ${containerStyle} w-full h-[360px] flex flex-col items-center innerContainerPadding py-6 bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/35 before:content-[''] before:z-0 text-white xs:py-8 sm:h-[400px] md:h-[440px] lg:h-[480px] xl:h-[520px] xl:py-10 2xl:h-[560px]`}
        >
            <div className="relative z-10 flex flex-col items-center text-center gap-2.5">
                <h1 className="titleStyle">{heroData.title}</h1>

                {heroData?.description && (
                    <h5 className="text-sm md:w-[75%] md:text-base xl:text-lg 2xl:text-xl">
                        {heroData.description}
                    </h5>
                )}

                {breadcrumbData && (
                    <Breadcrumb
                        breadcrumbData={breadcrumbData}
                    />
                )}

                {btnData && (
                    <BasicBtn
                        btnStyleClass={btnData.btnStyleClass}
                        btnData={btnData}
                    />
                )}
            </div>
        </div>
    )
}