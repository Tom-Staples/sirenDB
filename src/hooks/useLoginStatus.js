import { useState } from 'react';

const useLoginStatus = () => {
  const [loggedIn, setLoggedIn] = useState();

  const updateLogin = () => {
    setLoggedIn(!loggedIn);
  };
  return { loggedIn, updateLogin };
};

export default useLoginStatus;
