import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const ProjectAss = () => {
    // 1. Fetching Data from an API:
    // Use the fetch API to retrieve data from a public API (e.g., JSON Placeholder, Rick and Morty API, or any other free API).
    // Store the fetched data in React state using the useState hook.
    // Use the useEffect hook to fetch data when the component mounts.
    // Handle loading states and errors gracefully.

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return ( 
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )};

    

        </>
     );
}

export default ProjectAss;