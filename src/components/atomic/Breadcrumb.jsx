import { Link } from "react-router"
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
                        <span className="text-xl">
                            {ReactIcons.SLASH}
                        </span>
                    )}

                    <Link
                        to={item.path}
                        className="text-lg font-medium text-white hover:text-blue-500"
                    >
                        {item.title}
                    </Link>
                </div>
            ))}
        </nav>
    )
}
