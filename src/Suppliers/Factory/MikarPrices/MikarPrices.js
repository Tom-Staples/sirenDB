import React from 'react';
import SearchForm from '../../../components/SearchForm/SearchForm';
import useMikarCalculate from '../../../hooks/useMikarCalculate';

const MikarPrices = () => {
  const modelList = [
    'Arlo',
    'Barbican',
    'Pillow',
    'Petal',
    'Rise',
    'Carnaby',
    'Lennon'
  ];
  const fabricTypes = [
    'John Lewis Normal',
    'John Lewis Railroad',
    'John Lewis Normal Stripe',
    'John Lewis Railroad Stripe',
    'Stock Normal',
    'Stock Railroad',
    'Leather',
    'White Price'
  ];

  const [result, handleSubmit] = useMikarCalculate();

  return (
    <div className='h-screen text-center pt-20'>
      <h1 className='text-4xl'>Mikar Prices</h1>
      <SearchForm
        supplier='mikar'
        modelList={modelList}
        fabricTypes={fabricTypes}
        handleSubmit={handleSubmit}
      />
      {result && (
        <div className='w-2/5 mx-auto mt-20 bg-gray-700 p-10 rounded text-center text-2xl'>
          <h2>{`Price: £${result}`}</h2>
        </div>
      )}
    </div>
  );
};

export default MikarPrices;
