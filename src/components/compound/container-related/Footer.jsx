import { useState } from "react"
import { NavLink } from "react-router"
import { Routes } from "@constants/Routes"
import { ReactIcons } from "@constants/ReactIcons"

const footerLinks = [
    {
        title: 'Core',
        links: [
            { title: Routes.HOME.title, path: Routes.HOME.path },
            { title: Routes.ABOUT.title, path: Routes.ABOUT.path },
            { title: Routes.BLOGS.title, path: Routes.BLOGS.path },
            { title: Routes.SERVICES.title, path: Routes.SERVICES.path },
            { title: Routes.CONTACT.title, path: Routes.CONTACT.path },
        ]
    },
    {
        title: 'Legal',
        links: [
            { title: Routes.FAQ.title, path: Routes.FAQ.path },
            { title: Routes.PRIVACY_POLICY.title, path: Routes.PRIVACY_POLICY.path },
            { title: Routes.TERMS_CONDITION.title, path: Routes.TERMS_CONDITION.path },
        ]
    },
    {
        title: 'Resources',
        links: [
            { title: Routes.SERVICE_AIR_FREIGHT.title, path: Routes.SERVICE_AIR_FREIGHT.path },
            { title: Routes.SERVICE_LAND_FREIGHT.title, path: Routes.SERVICE_LAND_FREIGHT.path },
            { title: Routes.SERVICE_SEA_FREIGHT.title, path: Routes.SERVICE_SEA_FREIGHT.path },
            { title: Routes.SERVICE_DG_CARGO.title, path: Routes.SERVICE_DG_CARGO.path },
            { title: Routes.SERVICE_TRANSIT_TRADE.title, path: Routes.SERVICE_TRANSIT_TRADE.path },
            { title: Routes.SERVICE_CUSTOM_CLEARANCE.title, path: Routes.SERVICE_CUSTOM_CLEARANCE.path },
        ]
    },
];

const contactLinks = [
    {
        title: "Suite # 426, 4th Floor، Trade Avenue, Hasrat Mohani Rd, Seari Quarters, Karachi, Pakistan",
        icon: ReactIcons.BUILDING,
        onClick: () => console.log("Address Clicked"),
    },
    {
        title: "info@mdl.net",
        icon: ReactIcons.MAIL,
        onClick: () => console.log("Email Clicked"),
    },
    {
        title: "02132414943",
        icon: ReactIcons.PHONE,
        onClick: () => console.log("Phone Clicked"),
    },
];

export const Footer = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection((prev) => (prev === section ? null : section));
    };

    return (
        <footer className="grid grid-rows-1 py-6 gap-4 innerContainerPadding text-white bg-custom-blue xl:grid-cols-6 2xl:py-10 2xl:gap-10">
            <div className="col-span-1 flex flex-col gap-3.5 xl:col-span-2">
                <img
                    src={"/images/logos/logo.png"}
                    alt="Logo of Marine Dynamics Logistics"
                    className="max-w-36 object-contain"
                />
                <p className="tracking-tighter text-sm sm:text-base">
                    Marine Dynamic Logistics is a trusted shipping and freight forwarding
                    company delivering efficient, reliable, and cost-effective logistics
                    solutions specialized in land, sea, and air freight, ensuring seamless
                    transportation for businesses of all sizes.
                </p>
            </div>

            {footerLinks?.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-3.5"
                >
                    <button
                        onClick={() => toggleSection(item.title)}
                        className="flex justify-between items-center text-xl border-b-2 border-b-custom-green cursor-pointer sm:select-none sm:border-b-none xl:cursor-auto"
                    >
                        <h5>{item.title}</h5>

                        <span className="transition-transform duration-300 xl:hidden">
                            {openSection === item.title ?
                                <span className="rotate-180">
                                    {ReactIcons.DOWN}
                                </span>
                                :
                                ReactIcons.DOWN
                            }
                        </span>
                    </button>

                    {openSection === item.title && (
                        <div
                            className={`${openSection === item.title ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} flex flex-col gap-2 overflow-hidden transition-all duration-300 xl:max-h-none xl:opacity-100`}
                        >
                            {item.links.map((link, linkIndex) => (
                                <NavLink
                                    end
                                    key={linkIndex}
                                    to={link.path}
                                    className={({ isActive }) => `relative w-fit after:block after:h-0.5 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 after:bg-custom-green ${isActive ? "after:w-full" : "after:w-0"} hover:after:w-full`}
                                >
                                    {link.title}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <div className="flex flex-col gap-3.5">
                <h5 className="text-xl">Connection</h5>

                {contactLinks.map((item, index) => (
                    <div
                        key={index}
                        onClick={item.onClick}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <span className="text-lg">{item.icon}</span>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </footer>
    );
};