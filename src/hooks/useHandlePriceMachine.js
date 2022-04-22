import { useState } from 'react';

const useHandlePriceMachine = (endpoint, queryParams) => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  const updateFile = async () => {
    setLoading(true);
    setData('');
    try {
      const response = await fetch(endpoint, queryParams);
      const result = await response.json();
      if (result.fileCreated) {
        window.open('https://siren-price-database.herokuapp.com/priceMachine');
      }
      setLoading(false);
      setData(result.message);
    } catch (err) {
      console.error(err);
    }
  };

  return { updateFile, data, loading };
};

export default useHandlePriceMachine;
