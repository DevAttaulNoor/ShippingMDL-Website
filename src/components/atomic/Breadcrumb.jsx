import { NavLink } from "react-router"
import { ReactIcons } from "@constants/ReactIcons"

export const Breadcrumb = ({ breadcrumbData }) => {
    return (
        <nav className="flex items-center">
            {breadcrumbData.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center"
                >
                    {index !== 0 && (
                        <span className="text-lg">
                            {ReactIcons.SLASH}
                        </span>
                    )}

                    <NavLink
                        to={item.path}
                        className={({ isActive }) => `relative font-medium ${isActive ? 'text-custom-green' : 'text-white'} hover:text-custom-green`}
                    >
                        {item.title}
                    </NavLink>
                </div>
            ))}
        </nav>
    )
}