import { useState } from 'react';
import filterItems from '../helpers/filterItems';

const useImobCalculate = () => {
  const [result, setResult] = useState('');

  const calculatePrice = (e, models, fabrics, queryParams) => {
    e.preventDefault();
    const [model, fabric] = filterItems(models, fabrics, queryParams);
    const { fabricType, cost } = fabric;
    let whitePrice;
    let consumption;
    let price;

    if (fabricType === 'leather') {
      whitePrice = model.whitePrice.leather;
      consumption = model.consumption.leather;
    } else {
      whitePrice = model.whitePrice.normal;
      if (fabricType === 'stock') {
        consumption = model.consumption.normal;
      }
      if (fabricType === 'john lewis normal') {
        consumption = model.consumption.hpNormal;
      }
      if (fabricType === 'john lewis railroad') {
        consumption = model.consumption.hpRailroad;
      }
      if (fabricType === 'john lewis normal stripe') {
        consumption = model.consumption.hpNormalStripe;
      }
      if (fabricType === 'john lewis railroad stripe') {
        consumption = model.consumption.hpRailroadStripe;
      }
      if (fabricType === 'white price') {
        consumption = 0;
      }
    }

    price = Math.round((whitePrice + consumption * cost) * 100) / 100;
    setResult(price);
  };
  return [result, calculatePrice];
};

export default useImobCalculate;
