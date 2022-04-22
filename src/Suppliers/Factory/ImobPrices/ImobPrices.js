import React from 'react';
import SearchForm from '../../../components/SearchForm/SearchForm';
import useImobCalculate from '../../../hooks/useImobCalculate';

const ImobPrices = () => {
  const modelList = [
    'Camden',
    'Camber',
    'Frome',
    'Hendricks',
    'Buttoned Footstool',
    'Meghan',
    'Audrey',
    'Cane',
    'Tuck',
    'Lounge',
    'Wave'
  ];
  const fabricTypes = [
    'John Lewis Normal',
    'John Lewis Railroad',
    'John Lewis Normal Stripe',
    'John Lewis Railroad Stripe',
    'Stock',
    'Leather',
    'White Price'
  ];

  const [result, handleSubmit] = useImobCalculate();

  return (
    <div className='h-screen text-center pt-20'>
      <h1 className='text-4xl'>Imob Prices</h1>
      <SearchForm
        supplier='imob'
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

export default ImobPrices;
