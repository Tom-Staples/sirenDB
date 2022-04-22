import React from 'react';
import SearchForm from '../../../components/SearchForm/SearchForm';

const ValmedyPrices = () => {
  const modelList = ['Arlo', 'Duplet', 'Kip', 'KixII', 'Sansa'];
  const fabricTypes = ['White Price Fabric'];

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className='h-screen text-center pt-20'>
      <h1 className='text-4xl'>Valmedy Prices</h1>
      <SearchForm
        supplier='valmedy'
        modelList={modelList}
        fabricTypes={fabricTypes}
        handleSubmit={handleSubmit}
      />
      <div className='w-2/5 mx-auto mt-20 bg-gray-700 p-10 rounded text-center text-2xl'>
        <h2>Valmedy is not currently in use as a factory.</h2>
      </div>
    </div>
  );
};

export default ValmedyPrices;
