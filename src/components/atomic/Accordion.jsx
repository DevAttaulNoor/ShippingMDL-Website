import { useState } from "react";
import { ReactIcons } from "@constants/ReactIcons";

export const Accordion = ({ accordionData }) => {
    const [openItems, setOpenItems] = useState([]);

    const toggleAccordion = (id) => {
        setOpenItems((prev) =>
            prev.includes(id)
                ? prev.filter((itemId) => itemId !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="border rounded-md">
            {accordionData?.map((item, index) => {
                const isOpen = openItems.includes(index);
                const isLastItem = index === accordionData.length - 1;

                return (
                    <div key={index}>
                        <button
                            onClick={() => toggleAccordion(index)}
                            className={`w-full flex items-center justify-between p-4 font-medium border-b transition-colors cursor-pointer  border-gray-200 text-gray-500 hover:text-black ${isLastItem && !isOpen && "border-b-0"}`}
                        >
                            <span>{item.question}</span>
                            <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                {ReactIcons.DOWN}
                            </span>
                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden text-gray-500 ${isOpen ? `max-h-96 p-4 ${!isLastItem ? "border-b" : ""} opacity-100` : "max-h-0 opacity-0"}`}
                        >
                            {item.answer}
                        </div>
                    </div>
                );
            })}
        </div >
    );
};