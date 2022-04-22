import { useEffect, useState } from 'react';

const useAuthenticateUser = (endpoint, queryParams, dependencies) => {
  const [auth, setAuth] = useState(true);
  useEffect(() => {
    const queryData = async () => {
      try {
        const response = await fetch(endpoint, queryParams);
        const result = await response.json();
        setAuth(result.auth);
      } catch (err) {
        console.error(err);
      }
    };
    queryData();
  }, [dependencies, endpoint, queryParams]);
  return { auth };
};

export default useAuthenticateUser;
