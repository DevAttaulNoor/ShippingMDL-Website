import { Routes } from "@constants/Routes"
import { ReactIcons } from "@constants/ReactIcons"
import logo from '/images/logos/logo.png'

export const Footer = () => {
    const footerlinks = [
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
        {
            title: Routes.FAQ.title,
            path: Routes.FAQ.path
        },
        {
            title: Routes.TERMS_CONDITION.title,
            path: Routes.TERMS_CONDITION.path
        },
        {
            title: Routes.PRIVACY_POLICY.title,
            path: Routes.PRIVACY_POLICY.path
        },
    ]

    return (
        <footer>
            <div className="flex gap-2">
                <img
                    src={logo}
                    alt="logo of Marine Dynamics Logistics"
                />

                <p>Marine Dynamic Logistics</p>
            </div>

            <div className="grid grid-cols-2">
                {footerlinks.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={''}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </div>

            <div className="flex gap-2">
                <h3>Contact Us</h3>

                <div className="flex items-center gap-1">
                    <span>{ReactIcons.Building}</span>
                    <span>{ReactIcons.Mail}</span>
                    <span>{ReactIcons.Phone}</span>
                </div>
            </div>
        </footer>
    )
}