import React from 'react';
import { Link } from 'react-router-dom';

const SupplierCardUI = props => {
  return (
    <div className='bg-gray-700 mt-20 mr-5 w-1/3 p-5 rounded mb-10 text-center'>
      <h2 className=' text-3xl'>{props.supplier}</h2>
      <p className='my-5'>{props.description}</p>
      <h3 className='text-xl mb-2'>Model Range</h3>
      <ul className='flex flex-wrap justify-center'>{props.modelDisplay}</ul>
      <Link to={`/Suppliers/${props.supplier.toLowerCase()}`}>
        <button className='mt-5 px-6 py-2 rounded-lg bg-purple-700 hover:bg-purple-500'>
          Price List
        </button>
      </Link>
    </div>
  );
};

export default SupplierCardUI;
