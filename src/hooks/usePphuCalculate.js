import { useState } from 'react';
import filterItems from '../helpers/filterItems';

const usePphuCalculate = () => {
  const [result, setResult] = useState('');

  const calculatePrice = (e, models, fabrics, queryParams) => {
    e.preventDefault();
    const [model, fabric] = filterItems(models, fabrics, queryParams);
    const { fabricType, cost } = fabric;
    const { name } = model;
    let whitePrice;
    let consumption;

    if (fabricType === 'leather') {
      whitePrice = model.whiteprice.leather;
      consumption = model.consumption.leather;
    } else {
      whitePrice = model.whiteprice.normal;
      if (fabricType === 'stock normal' || fabricType === 'john lewis normal') {
        consumption = model.consumption.normal;
      } else if (fabricType === 'white price') {
        consumption = 0;
      } else {
        consumption = model.consumption.railroad;
      }
    }
    whitePrice = parseInt(whitePrice * 100) / 100;

    let price;
    if (
      (name === 'revolution' || name === 'madison' || name === 'joplin') &&
      fabricType === 'leather'
    ) {
      price = Math.round(whitePrice + consumption * cost);
      setResult(price);
    } else {
      price = Math.round((whitePrice + consumption * cost) * 100) / 100;
      setResult(price);
    }
  };

  return [result, calculatePrice];
};

export default usePphuCalculate;
