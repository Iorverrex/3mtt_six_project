import { useState, useEffect } from 'react';
import axios from 'axios';

// 1. Create a custom hook to fetch data from an API. The hook should handle loading and error states.
// The hook should return the fetched data, loading state, and error state. 
// Use axios for making API requests.
// The custom hook should be reusable and can be used in any component.
// The hook should accept a URL as a parameter and return the fetched data, 
// loading state, and error state.

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
