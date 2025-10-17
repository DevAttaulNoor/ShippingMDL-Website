import { Link, NavLink } from "react-router"
import { Routes } from "@constants/Routes"
import { ReactIcons } from "@constants/ReactIcons"
import logo from '/images/logos/logo.png'

export const Header = () => {
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
    ]


    return (
        <header>
            <Link
                to={Routes.HOME.path}
                className=""
            >
                <img
                    src={logo}
                    alt='logo of Marine Dynamics Logistics'
                    className="w-full h-full object-contain"
                />
            </Link>

            <div className="flex items-center gap-1.5">
                {navlinks.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={''}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </div>

            <span>
                {ReactIcons.Phone}
            </span>
        </header>
    )
}
