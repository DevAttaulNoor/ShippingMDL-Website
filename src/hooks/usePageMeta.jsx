import { useEffect } from "react";

export const usePageMeta = (title, description) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }

        if (description) {
            let metaTag = document.querySelector("meta[name='description']");

            if (!metaTag) {
                metaTag = document.createElement("meta");
                metaTag.name = "description";
                document.head.appendChild(metaTag);
            }

            metaTag.content = description;
        }
    }, [title, description]);
};