import { Breadcrumb } from "../atomic/Breadcrumb"

export const HeroSection = ({ heroData, breadcrumbData }) => {
    return (
        <div
            style={{ backgroundImage: `url(${heroData.bgImage})` }}
            className="w-full h-[640px] flex flex-col items-center justify-center text-center innerContainerPadding py-10 gap-4 bg-cover bg-center bg-no-repeat text-white"
        >
            <h1 className="text-6xl font-semibold">{heroData.title}</h1>

            <Breadcrumb
                breadcrumbData={breadcrumbData}
            />
        </div>
    )
}