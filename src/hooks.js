import { useEffect, useState } from "react";
import axios from "axios";

export const useRemoteService = (url, initialData) => {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            setError(false);
            setLoading(true);

            try {
                const res = await axios.get(url);
                setData(res.data);
            } catch (e) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return {data, loading, error};
}