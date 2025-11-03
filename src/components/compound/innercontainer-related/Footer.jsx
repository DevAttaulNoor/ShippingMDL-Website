import { NavLink } from "react-router"
import { Routes } from "@constants/Routes"
import { ReactIcons } from "@constants/ReactIcons"
import logo from '/images/logos/logo.png'

const mainLinks = [
    {
        title: Routes.HOME.title,
        path: Routes.HOME.path
    },
    {
        title: Routes.ABOUT.title,
        path: Routes.ABOUT.path
    },
    {
        title: Routes.BLOGS.title,
        path: Routes.BLOGS.path
    },
    {
        title: Routes.SERVICES.title,
        path: Routes.SERVICES.path
    },
    {
        title: Routes.CONTACT.title,
        path: Routes.CONTACT.path
    },
];

const privacyLinks = [
    {
        title: Routes.FAQ.title,
        path: Routes.FAQ.path
    },
    {
        title: Routes.PRIVACY_POLICY.title,
        path: Routes.PRIVACY_POLICY.path
    },
    {
        title: Routes.TERMS_CONDITION.title,
        path: Routes.TERMS_CONDITION.path
    },
];

const serviceLinks = [
    {
        title: Routes.SERVICE_AIR_FREIGHT.title,
        path: Routes.SERVICE_AIR_FREIGHT.path
    },
    {
        title: Routes.SERVICE_LAND_FREIGHT.title,
        path: Routes.SERVICE_LAND_FREIGHT.path
    },
    {
        title: Routes.SERVICE_SEA_FREIGHT.title,
        path: Routes.SERVICE_SEA_FREIGHT.path
    },
    {
        title: Routes.SERVICE_DG_CARGO.title,
        path: Routes.SERVICE_DG_CARGO.path
    },
    {
        title: Routes.SERVICE_TRANSIT_TRADE.title,
        path: Routes.SERVICE_TRANSIT_TRADE.path
    },
    {
        title: Routes.SERVICE_CUSTOM_CLEARANCE.title,
        path: Routes.SERVICE_CUSTOM_CLEARANCE.path
    },
];

const contactLinks = [
    {
        title: 'Address',
        icon: ReactIcons.BUILDING,
        onClick: () => { console.log('Address Clicked') }
    },
    {
        title: 'Email',
        icon: ReactIcons.MAIL,
        onClick: () => { console.log('Email Clicked') }
    },
    {
        title: 'Phone',
        icon: ReactIcons.PHONE,
        onClick: () => { console.log('Phone Clicked') }
    }
];

export const Footer = () => {
    return (
        <footer className="grid grid-cols-6 py-8 gap-10 innerContainerPadding text-white bg-custom-blue">
            <div className="col-span-2 flex flex-col gap-3.5">
                <img
                    src={logo}
                    alt="Logo of Marine Dynamics Logistics"
                    className="max-w-36 object-contain"
                />

                <p className="text-justify">Marine Dynamic Logistics is a trusted shipping and freight forwarding company delivering efficient, reliable, and cost-effective logistics solutions specialized in land, sea, and air freight, ensuring seamless transportation for businesses of all sizes.</p>
            </div>

            <div className="flex flex-col gap-2">
                {mainLinks.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) => `relative w-fit font-medium after:block after:h-0.5 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 after:bg-custom-green ${isActive ? 'after:w-full' : 'after:w-0'} hover:after:w-full`}                    >
                        {item.title}
                    </NavLink>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                {privacyLinks.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) => `relative w-fit font-medium after:block after:h-0.5 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 after:bg-custom-green ${isActive ? 'after:w-full' : 'after:w-0'} hover:after:w-full`}                    >
                        {item.title}
                    </NavLink>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                {serviceLinks.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) => `relative w-fit font-medium after:block after:h-0.5 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 after:bg-custom-green ${isActive ? 'after:w-full' : 'after:w-0'} hover:after:w-full`}                    >
                        {item.title}
                    </NavLink>
                ))}
            </div>

            <div className="flex flex-col gap-3.5">
                <h5 className="text-xl">Contact Us</h5>

                <div className="w-fit flex flex-col gap-2">
                    {contactLinks.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <span className="text-lg">
                                {item.icon}
                            </span>

                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}