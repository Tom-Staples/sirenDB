import { useState } from 'react';

const useHandleLogin = (endpoint, queryParams, updateLogin) => {
  const [data, setData] = useState({});

  const queryData = async () => {
    try {
      const response = await fetch(endpoint, queryParams);
      const result = await response.json();
      setData(result);
      localStorage.setItem('token', result.token);
      if (result.auth) {
        updateLogin();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { data, queryData };
};

export default useHandleLogin;
