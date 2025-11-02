import { Breadcrumb } from "@components/atomic/Breadcrumb"
import { BasicBtn } from "@components/atomic/buttons/BasicBtn"

export const HeroSection = ({ heroData, btnData, breadcrumbData }) => {
    return (
        <div
            style={{ backgroundImage: `url(${heroData.bgImage})` }}
            className="w-full h-[640px] flex flex-col items-center justify-center text-center innerContainerPadding py-10 gap-4 bg-cover bg-center bg-no-repeat text-white"
        >
            <h1 className="text-5xl font-semibold">{heroData.title}</h1>

            {heroData?.description && (
                <h5 className="w-[75%]">{heroData?.description}</h5>
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
    )
}