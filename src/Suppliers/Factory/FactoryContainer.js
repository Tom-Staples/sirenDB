import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import FeniksPrices from './FeniksPrices/FeniksPrices';
import ImobPrices from './ImobPrices/ImobPrices';
import ImsPrices from './ImsPrices/ImsPrices';
import MikarPrices from './MikarPrices/MikarPrices';
import PphuPrices from './PphuPrices/PphuPrices';
import ValmedyPrices from './ValmedyPrices/ValmedyPrices';

const FactoryContainer = () => {
  let { factory } = useParams();
  const factoryList = {
    feniks: <FeniksPrices />,
    imob: <ImobPrices />,
    ims: <ImsPrices />,
    mikar: <MikarPrices />,
    pphu: <PphuPrices />,
    valmedy: <ValmedyPrices />
  };

  const displayedFactory = Object.entries(factoryList).filter(element => {
    return element[0] === factory;
  });
  return <h1>{displayedFactory[0][1]}</h1>;
};

export default FactoryContainer;
