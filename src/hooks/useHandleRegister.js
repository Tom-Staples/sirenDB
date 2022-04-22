import { useState } from 'react';

const useHandleRegister = (endpoint, queryParams) => {
  const [data, setData] = useState({});
  const queryData = async () => {
    try {
      const response = await fetch(endpoint, queryParams);
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error(err);
    }
  };

  return { data, queryData };
};

export default useHandleRegister;
