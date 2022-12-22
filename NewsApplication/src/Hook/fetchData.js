import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (url, type = null) => {
    const [veri, setVeri] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [url]);

    async function fetchData() {
        try {
            setLoading(true);
            const { data: responseData } = await axios.get(url);
            setVeri(responseData);
            setLoading(false);

            if (type === null) {
                setVeri(responseData);
                setLoading(false);
            } else {
                setVeri(responseData[type]);
            }
        }
        catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    return { veri, loading, error };
}

export default useFetch;