import React from "react";
import { useState, useEffect } from "react";
import ListComponent from "./ListComponent";

//3. Rendering the list in a parent component use the 'listComponent' inside a parent component and pass 
// the fetched data as props. Display a loading indicator while data is being fetched. Show an error 
// message if the API request fails

const ParentComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
	const fetchData = async () => {
	  try {
		const response = await fetch("https://api.example.com/data");
		if (!response.ok) {
		  throw new Error("Failed to fetch data");
		}
		const result = await response.json();
		setData(result);
	  } catch (err) {
		setError(err.message);
	  } finally {
		setLoading(false);
	  }
	};

	fetchData();
  }, []);

  if (loading) {
	return <div>Loading...</div>;
  }

  if (error) {
	return <div>Error: {error}</div>;
  }

  return data.length > 0 ? <ListComponent data={data} /> : null;
};

export default ParentComponent;
