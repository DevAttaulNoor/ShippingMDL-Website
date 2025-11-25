import { useEffect, useState } from "react"
import { NavLink } from "react-router"
import { Routes } from "@constants/Routes"
import { ReactIcons } from "@constants/ReactIcons"

const navLinks = [
    { title: Routes.HOME.title, path: Routes.HOME.path },
    { title: Routes.ABOUT.title, path: Routes.ABOUT.path },
    { title: Routes.BLOGS.title, path: Routes.BLOGS.path },
    { title: Routes.SERVICES.title, path: Routes.SERVICES.path },
    { title: Routes.CONTACT.title, path: Routes.CONTACT.path },
];

const servicesLinks = [
    { title: Routes.SERVICE_AIR_FREIGHT.title, path: Routes.SERVICE_AIR_FREIGHT.path },
    { title: Routes.SERVICE_SEA_FREIGHT.title, path: Routes.SERVICE_SEA_FREIGHT.path },
    { title: Routes.SERVICE_LAND_FREIGHT.title, path: Routes.SERVICE_LAND_FREIGHT.path },
    { title: Routes.SERVICE_DG_CARGO.title, path: Routes.SERVICE_DG_CARGO.path },
    { title: Routes.SERVICE_TRANSIT_TRADE.title, path: Routes.SERVICE_TRANSIT_TRADE.path },
    { title: Routes.SERVICE_CUSTOM_CLEARANCE.title, path: Routes.SERVICE_CUSTOM_CLEARANCE.path },
];

export const Header = () => {
    const [position, setPosition] = useState(false)
    const [open, setOpen] = useState({
        serviceNav: false,
        smallScreenHeader: false,
    })

    useEffect(() => {
        const handleHeaderBgChange = () => {
            if (window.scrollY >= 150) {
                setPosition(true);
            } else {
                setPosition(false);
            }
        };

        window.addEventListener('scroll', handleHeaderBgChange);
        return () => {
            window.removeEventListener('scroll', handleHeaderBgChange);
        };
    }, []);

    return (
        <header className={`${position ? 'bg-custom-blue' : 'bg-transparent backdrop-blur-xl'} fixed top-0 left-0 w-full flex flex-col transition-all duration-300 z-20 text-white`}>
            <nav
                onMouseLeave={() => setOpen(prev => ({ ...prev, serviceNav: false }))}
                className="flex items-center justify-between innerContainerPadding py-3 border-b-2 shadow-lg border-b-custom-green md:py-3.5 lg:py-4 xl:py-3.5 2xl:py-2"
            >
                <NavLink
                    to={Routes.HOME.path}
                    className="max-w-20 sm:flex-[0.1] sm:max-w-full md:max-w-28"
                >
                    <img
                        src="/images/logos/logo.png"
                        alt="logo of Marine Dynamic Logistics"
                        className="w-full h-full object-contain"
                    />
                </NavLink>

                <span
                    onClick={() => setOpen(prev => ({ ...prev, smallScreenHeader: true }))}
                    className="flex text-3xl cursor-pointer sm:hidden"
                >
                    {ReactIcons.MENU_HAMBURGER}
                </span>

                <div className="hidden items-center justify-center gap-3 sm:flex sm:flex-[0.8] sm:gap-4 md:gap-5">
                    {navLinks.map((item, index) => (
                        <NavLink
                            end
                            key={index}
                            to={item.path}
                            onMouseEnter={() => item.title === Routes.SERVICES.title && setOpen(prev => ({ ...prev, serviceNav: true }))}
                            onMouseLeave={() => item.title === Routes.SERVICES.title && setOpen(prev => ({ ...prev, serviceNav: false }))}
                            className={({ isActive }) => `relative text-base font-medium after:block after:h-0.5 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 after:bg-custom-green ${isActive ? 'after:w-full' : 'after:w-0'} hover:after:w-full md:text-lg`}
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden justify-end sm:flex sm:flex-[0.1]">
                    <span
                        onClick={() => console.log('Call clicked')}
                        className="text-xl p-1.5 rounded-full cursor-pointer"
                    >
                        {ReactIcons.PHONE}
                    </span>
                </div>
            </nav>

            <nav
                onMouseEnter={() => setOpen(prev => ({ ...prev, serviceNav: true }))}
                onMouseLeave={() => setOpen(prev => ({ ...prev, serviceNav: false }))}
                className={`${open.serviceNav ? 'max-h-24 py-2.5 opacity-100 border-b-2 shadow-lg border-b-custom-green md:py-3.5 lg:py-4 xl:py-4.5 2xl:py-5' : 'max-h-0 opacity-0 border-b-0'} flex justify-center items-center gap-3 overflow-hidden transition-all duration-300 sm:gap-4 md:gap-5`}
            >
                {servicesLinks.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) => `relative text-base font-medium after:block after:h-0.5 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 after:bg-custom-green ${isActive ? 'after:w-full' : 'after:w-0'} hover:after:w-full md:text-lg`}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </nav>

            {
                open.smallScreenHeader && (
                    <>
                        <div
                            onClick={() => setOpen(prev => ({ ...prev, smallScreenHeader: false }))}
                            className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${open.smallScreenHeader ? "opacity-100 visible" : "opacity-invisible"}`}
                        />

                        <div
                            className={`fixed top-0 right-0 w-1/3 h-full flex flex-col p-3 gap-4 transform transition-transform duration-500 ease-in-out ${open.smallScreenHeader ? "translate-x-0" : "translate-x-full"} z-30 text-white bg-custom-blue`}
                        >
                            <span
                                onClick={() => setOpen(prev => ({ ...prev, smallScreenHeader: false }))}
                                className="w-fit self-end text-2xl cursor-pointer"
                            >
                                {ReactIcons.CROSS}
                            </span>

                            {navLinks.map((item, index) => (
                                <NavLink
                                    end
                                    key={index}
                                    to={item.path}
                                    className={({ isActive }) => `relative w-fit text-base font-medium after:block after:h-0.5 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 after:bg-custom-green ${isActive ? 'after:w-full' : 'after:w-0'} hover:after:w-full md:text-lg`}
                                >
                                    {item.title}
                                </NavLink>
                            ))}
                        </div>
                    </>
                )
            }
        </header >
    )
}