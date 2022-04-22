const { useState, useEffect } = require('react');

const useFetchData = (endpoint, dependency) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [dependency, endpoint]);

  return [data];
};

export default useFetchData;
