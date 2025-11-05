import { Link } from "react-router";
import { ReactIcons } from "@constants/ReactIcons";

export const AnimatedBtn = ({ btnStyleClass = '', btnData }) => {
    const content = (
        <>
            <div className="relative flex items-center gap-2.5 z-[5]">
                {btnData.text}

                <span className="transform -translate-x-1 transition-all duration-300 group-hover:translate-x-0">
                    {ReactIcons.RIGHT}
                </span>
            </div>

            <span className="absolute top-1/2 bottom-1/2 -translate-y-1/2 left-0 w-12 h-12 rounded-full transition-all duration-300 bg-custom-green group-hover:w-full" />
        </>
    );

    return btnData.path ? (
        <Link
            to={btnData.path}
            className={`${btnStyleClass} group relative btnStyle flex items-center text-custom-blue active:scale-95`}
        >
            {content}
        </Link>
    ) : (
        <button
            onClick={btnData.onClick}
            className={`${btnStyleClass} group relative btnStyle flex items-center text-custom-blue active:scale-95`}
        >
            {content}
        </button>
    );
};
