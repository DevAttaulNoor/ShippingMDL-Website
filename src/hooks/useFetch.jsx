import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error("Error loading data:", err));
    }, [url]);

    return { data };
}