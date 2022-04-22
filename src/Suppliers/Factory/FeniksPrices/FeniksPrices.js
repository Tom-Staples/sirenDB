import React from 'react';
import SearchForm from '../../../components/SearchForm/SearchForm';
import useFeniksCalculate from '../../../hooks/useFeniksCalculate';

const FeniksPrices = () => {
  const modelList = ['Chesterfield'];
  const fabricTypes = ['Fabric', 'Leather'];

  const [result, handleSubmit] = useFeniksCalculate();
  return (
    <div className='h-screen text-center pt-20'>
      <h1 className='text-4xl'>Feniks Prices</h1>
      <SearchForm
        supplier='feniks'
        modelList={modelList}
        fabricTypes={fabricTypes}
        handleSubmit={handleSubmit}
      />
      {result.length !== 0 && (
        <div className='flex w-2/5 mx-auto mt-20 bg-gray-700 p-10 rounded text-center text-2xl justify-between'>
          <h2>{`Low Rate Price: £${result[0]}`}</h2>
          <h2>{`High Rate Price: £${result[1]}`}</h2>
        </div>
      )}
    </div>
  );
};

export default FeniksPrices;
