import { useState } from 'react';
import filterItems from '../helpers/filterItems';

const useMikarCalculate = () => {
  const [result, setResult] = useState('');

  const calculatePrice = (e, models, fabrics, queryParams) => {
    e.preventDefault();
    const [model, fabric] = filterItems(models, fabrics, queryParams);
    const { fabricType, cost } = fabric;
    let whitePrice;
    let consumption;

    if (
      fabricType === 'john lewis normal stripe' ||
      fabricType === 'john lewis railroad stripe'
    ) {
      whitePrice = model.whitePrice.stripe;
      if (fabricType === 'john lewis normal stripe') {
        consumption = model.consumption.hpNormalStripe;
      } else {
        consumption = model.consumption.hpRailroadStripe;
      }
    } else if (fabricType === 'leather') {
      whitePrice = model.whitePrice.leather;
      consumption = model.consumption.leather;
    } else {
      whitePrice = model.whitePrice.normal;
      if (fabricType === 'stock normal') {
        consumption = model.consumption.normal;
      }
      if (fabricType === 'stock railroad') {
        consumption = model.consumption.railroad;
      }
      if (fabricType === 'john lewis normal') {
        consumption = model.consumption.hpNormal;
      }
      if (fabricType === 'john lewis railroad') {
        consumption = model.consumption.hpRailroad;
      }
      if (fabricType === 'white price') {
        consumption = 0;
      }
    }
    const price = Math.round((whitePrice + consumption * cost) * 100) / 100;
    setResult(price);
  };

  return [result, calculatePrice];
};

export default useMikarCalculate;
