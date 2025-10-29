import { Link, NavLink } from "react-router"
import { Routes } from "@constants/Routes"
import { ReactIcons } from "@constants/ReactIcons"
import logo from '/images/logos/logo.png'

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
        <header className="fixed max-w-outerContainer w-full flex items-center justify-between py-5 innerContainerPadding z-20 text-white bg-blue-500">
            <Link
                to={Routes.HOME.path}
                className="flex-[0.1]"
            >
                <img
                    src={logo}
                    alt='logo of Marine Dynamics Logistics'
                    className="w-full h-full object-contain"
                />
            </Link>

            <div className="flex items-center gap-6">
                {navlinks.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) => `${isActive ? 'underline' : ''} text-lg font-medium underline-offset-4 hover:underline`}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </div>

            <div className="flex-[0.1] flex items-center justify-end">
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