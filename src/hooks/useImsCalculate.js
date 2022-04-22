import { useState } from 'react';
import filterItems from '../helpers/filterItems';

const useImsCalculate = () => {
  const [result, setResult] = useState('');

  const calculatePrice = (e, models, fabrics, queryParams) => {
    e.preventDefault();
    const [model, fabric] = filterItems(models, fabrics, queryParams);
    const { whitePrice, consumption } = model;
    const { cost } = fabric;
    const price = Math.round((whitePrice + consumption * cost) * 100) / 100;
    setResult(price);
  };

  return [result, calculatePrice];
};

export default useImsCalculate;
