import React from 'react';
import SearchForm from '../../../components/SearchForm/SearchForm';
import useImsCalculate from '../../../hooks/useImsCalculate';

const ImsPrices = () => {
  const modelList = [
    'ArchieII',
    'Barbican',
    'Belgo',
    'Compact',
    'Lenya',
    'Rebecca',
    'Samantha',
    'Sansa',
    'Lozenge',
    'Siesta'
  ];
  const fabricTypes = ['John Lewis', 'Stock'];

  const [result, handleSubmit] = useImsCalculate();

  return (
    <div className='h-screen text-center pt-20'>
      <h1 className='text-4xl'>Ims Prices</h1>
      <SearchForm
        supplier='ims'
        modelList={modelList}
        fabricTypes={fabricTypes}
        handleSubmit={handleSubmit}
      />
      {result && (
        <div className='w-2/5 mx-auto mt-20 bg-gray-700 p-10 rounded text-center text-2xl'>
          <h2>{`Price: €${result}`}</h2>
        </div>
      )}
    </div>
  );
};

export default ImsPrices;
