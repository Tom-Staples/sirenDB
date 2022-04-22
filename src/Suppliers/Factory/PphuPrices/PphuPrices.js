import React from 'react';
import SearchForm from '../../../components/SearchForm/SearchForm';
import usePphuCalculate from '../../../hooks/usePphuCalculate';

const PphuPrices = () => {
  const modelList = [
    'Barbican',
    'Cape',
    'Joplin',
    'Madison',
    'Revolution',
    'Natalie'
  ];
  const fabricTypes = [
    'John Lewis Normal',
    'John Lewis Railroad',
    'Leather',
    'Stock Normal',
    'Stock Railroad',
    'White Price'
  ];

  const [result, handleSubmit] = usePphuCalculate();

  return (
    <div className='h-screen text-center pt-20'>
      <h1 className='text-4xl'>PPHU Prices</h1>
      <SearchForm
        supplier='pphu'
        modelList={modelList}
        fabricTypes={fabricTypes}
        handleSubmit={handleSubmit}
      />
      {result && (
        <div className='w-2/5 mx-auto mt-20 bg-gray-700 p-10 rounded text-center text-2xl '>
          <h2>{`Price: £${result}`}</h2>
        </div>
      )}
    </div>
  );
};

export default PphuPrices;
