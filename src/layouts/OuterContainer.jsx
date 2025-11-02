import { useEffect, useState } from "react";
import { ReactIcons } from "@constants/ReactIcons";
import { Outlet, useLocation } from "react-router";

export const OuterContainer = ({ children }) => {
    const location = useLocation();
    const [topScroll, setTopScroll] = useState(false);

    const handleJumpToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setTopScroll(true);
            } else {
                setTopScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className="relative outerContainerStyle">
            {children ? children : <Outlet />}

            {topScroll && (
                <button
                    onClick={handleJumpToTop}
                    className="fixed bottom-3 right-3 text-xl p-3 rounded-full shadow-2xl border-2 rotate-180 z-10 cursor-pointer border-custom-green text-white bg-custom-blue"
                >
                    {ReactIcons.DOWN}
                </button>
            )}
        </main>
    );
};