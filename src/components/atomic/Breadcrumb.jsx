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
                        <span className="text-lg">
                            {ReactIcons.SLASH}
                        </span>
                    )}

                    <Link
                        to={item.path}
                        className="font-medium text-white hover:text-custom-blue"
                    >
                        {item.title}
                    </Link>
                </div>
            ))}
        </nav>
    )
}