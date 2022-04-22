import React from 'react';
import SupplierCardUI from './SupplierCardUI';

const SupplierCard = props => {
  const modelDisplay = props.models.map((model, index) => {
    return (
      <li key={index} className='mr-2'>
        <h4>{model.name}</h4>
        <img src={model.img} alt={`${model.name}`} />
      </li>
    );
  });
  return (
    <SupplierCardUI
      modelDisplay={modelDisplay}
      supplier={props.supplier}
      description={props.description}
    />
  );
};

export default SupplierCard;
