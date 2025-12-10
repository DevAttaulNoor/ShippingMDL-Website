import { useState, useEffect } from "react"
import { NavLink } from "react-router"
import { Routes } from "@constants/Routes"
import { useFetch } from "@hooks/useFetch";
import { ReactIcons } from "@constants/ReactIcons"

export const Footer = () => {
    const [openSection, setOpenSection] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(true);
    const { data: servicesData } = useFetch("/data/Services.json");

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
                { title: Routes.CERTIFICATION.title, path: Routes.CERTIFICATION.path },
                { title: Routes.GET_A_QUOTE.title, path: Routes.GET_A_QUOTE.path },
                { title: Routes.PRIVACY_POLICY.title, path: Routes.PRIVACY_POLICY.path },
                { title: Routes.TERMS_CONDITION.title, path: Routes.TERMS_CONDITION.path },
            ]
        },
        {
            title: 'Resources',
            links: servicesData
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

    const toggleSection = (section) => {
        if (isSmallScreen) {
            setOpenSection((prev) => (prev === section ? null : section));
        } else {
            return
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 450) {
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [window.innerWidth]);

    return (
        <footer className="grid grid-cols-1 py-5 gap-4 innerContainerPadding text-white bg-custom-blue xs:grid-cols-2 xs:py-6 sm:grid-cols-3 sm:py-7 sm:gap-5 md:py-8 lg:grid-cols-6 lg:py-6 lg:gap-6 xl:grid-cols-6 xl:py-10 2xl:gap-7">
            <div className="col-span-1 flex flex-col gap-3.5 xs:col-span-2">
                <img
                    src={"/images/logos/logo.png"}
                    alt="Logo of Marine Dynamics Logistics"
                    className="max-w-24 object-contain sm:max-w-28 lg:max-w-32 2xl:max-w-36"
                />

                <p className="descriptionStyle">
                    Marine Dynamic Logistics is a trusted shipping and freight forwarding company delivering efficient, reliable, and cost-effective logistics solutions specialized in land, sea, and air freight, ensuring seamless transportation for businesses of all sizes.
                </p>
            </div>

            {footerLinks?.map((item, index) => {
                let orderClass = "";
                if (item.title === "Core") {
                    orderClass = "xs:order-0 sm:order-1";
                } else if (item.title === "Legal") {
                    orderClass = "xs:order-2 sm:order-2";
                } else if (item.title === "Resources") {
                    orderClass = "xs:order-1 sm:order-3";
                }

                return (
                    <div
                        key={index}
                        className={`flex flex-col gap-2 sm:items-center ${orderClass}`}
                    >
                        <button
                            onClick={() => toggleSection(item.title)}
                            className="flex justify-between items-center text-lg sm:text-xl border-b-2 border-b-custom-green cursor-pointer xs:select-none xs:border-b-0 xs:cursor-auto"
                        >
                            <h5>{item.title}</h5>

                            <span
                                className={`${openSection === item.title ? "rotate-180" : ""} transition-transform duration-300 xs:hidden`}
                            >
                                {ReactIcons.DOWN}
                            </span>
                        </button>

                        <div className={`${openSection === item.title ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} flex flex-col sm:items-center gap-2 overflow-hidden transition-all duration-300 xs:max-h-96 xs:opacity-100`}>
                            {item.links?.map((link, linkIndex) => (
                                <NavLink
                                    end
                                    key={linkIndex}
                                    to={link.path}
                                    className={({ isActive }) => `relative w-fit text-sm whitespace-nowrap sm:text-base after:absolute after:left-0 after:bottom-0 ${isActive ? "after:w-full" : "after:w-0"} after:h-0.5 after:block after:transition-all after:duration-300 after:bg-custom-green hover:after:w-full`}
                                >
                                    {link.title}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                );
            })}

            <div className="flex flex-col gap-2 xs:order-3 sm:items-center sm:order-0 lg:order-4">
                <h5 className="text-lg sm:text-xl">Connection</h5>

                <div className="flex gap-2">
                    {contactLinks.map((item, index) => (
                        <span
                            key={index}
                            onClick={item.onClick}
                            className="text-lg p-2 rounded-lg cursor-pointer text-custom-blue bg-custom-green"
                        >
                            {item.icon}
                        </span>
                    ))}
                </div>
            </div>
        </footer>
    );
};