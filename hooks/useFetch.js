import { useState, useEffect } from "react";

export default function useFetch({url}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, [url]);

  return { response, error };
}