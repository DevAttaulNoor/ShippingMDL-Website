import { Link, NavLink } from "react-router"
import { Routes } from "@constants/Routes"
import { ReactIcons } from "@constants/ReactIcons"

const navlinks = [
    {
        title: Routes.HOME.title,
        path: Routes.HOME.path,
    },
    {
        title: Routes.ABOUT.title,
        path: Routes.ABOUT.path,
    },
    {
        title: Routes.BLOGS.title,
        path: Routes.BLOGS.path,
    },
    {
        title: Routes.SERVICES.title,
        path: Routes.SERVICES.path,
    },
    {
        title: Routes.CONTACT.title,
        path: Routes.CONTACT.path,
    },
];

export const Header = () => {
    return (
        <header className="fixed max-w-outerContainer w-full flex items-center justify-between py-3 innerContainerPadding z-20 text-white bg-custom-blue sm:py-4 xl:py-5">
            <Link
                to={Routes.HOME.path}
                className="w-20"
            >
                <img
                    src={'/images/logos/logo.png'}
                    alt='logo of Marine Dynamics Logistics'
                    className="w-full h-full object-contain"
                />
            </Link>

            <div className="flex sm:hidden">
                <span className="text-3xl cursor-pointer">{ReactIcons.MENU_HAMBURGER}</span>
            </div>

            <div className="hidden items-center gap-4 sm:flex sm:gap-4.5 md:gap-5 lg:gap-5.5 xl:gap-6">
                {navlinks.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) => `relative text-base font-medium after:block after:h-0.5 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 after:bg-custom-green ${isActive ? 'after:w-full' : 'after:w-0'} hover:after:w-full md:text-lg`}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </div>

            <div className="flex-[0.1] hidden items-center justify-end sm:flex">
                <span
                    onClick={() => { console.log('Call clicked') }}
                    className="text-xl p-1.5 rounded-full cursor-pointer"
                >
                    {ReactIcons.PHONE}
                </span>
            </div>
        </header>
    )
}