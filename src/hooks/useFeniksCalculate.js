import { useState } from 'react';
import filterItems from '../helpers/filterItems';

const useFeniksCalculate = () => {
  const [result, setResult] = useState([]);
  const calculatePrice = (e, models, fabrics, queryParams) => {
    e.preventDefault();
    const [model, fabric] = filterItems(models, fabrics, queryParams);
    const { lowRate, highRate } = model.whitePrice;
    const { normal, leather } = model.consumption;
    const { cost } = fabric;
    let lowPrice;
    let highPrice;
    if (queryParams.fabricType === 'fabric') {
      lowPrice = Math.round((lowRate + normal * cost) * 10) / 10;
      highPrice = Math.round((highRate + normal * cost) * 10) / 10;
    } else {
      lowPrice = Math.round((lowRate + leather * cost) * 10) / 10;
      highPrice = Math.round((highRate + leather * cost) * 10) / 10;
    }
    setResult([lowPrice, highPrice]);
  };

  return [result, calculatePrice];
};

export default useFeniksCalculate;
