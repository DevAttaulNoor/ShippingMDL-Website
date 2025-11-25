import { useEffect, useState, useRef } from "react";

export const useScrollFade = (direction = "up", duration = 0.5, delay = 0) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref.current);
                }
            }, { threshold: 0.05 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    const defaultStyle = {
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        opacity: 0,
        transform:
            direction === "up"
                ? "translateY(50px)"
                : direction === "down"
                    ? "translateY(-50px)"
                    : direction === "left"
                        ? "translateX(50px)"
                        : "translateX(-50px)",
    };

    const style = isVisible
        ? { ...defaultStyle, opacity: 1, transform: "translate(0,0)" }
        : defaultStyle;

    return { ref, style };
};