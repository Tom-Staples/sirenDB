import React, { useState } from 'react';
import useHandlePriceMachine from '../hooks/useHandlePriceMachine';

const PriceMachine = () => {
  const [supplier, setSupplier] = useState('selectSupplier');
  const [file, setFile] = useState();
  const [form, setForm] = useState();
  const { updateFile, data, loading } = useHandlePriceMachine(
    'https://siren-price-database.herokuapp.com/priceMachine',
    {
      method: 'POST',
      body: form
    }
  );

  const handleChange = e => {
    const supplierName = e.target.value;
    setSupplier(supplierName);
    let formData = new FormData();
    formData.append('supplier', supplierName);
    formData.append('file', file);
    setForm(formData);
  };

  const handleFileChange = e => {
    const files = e.target.files;
    if (files.length === 0) {
      setFile('');
    } else {
      setFile(files[0]);
      let formData = new FormData();
      formData.append('file', files[0]);
      formData.append('supplier', supplier);
      setForm(formData);
    }
  };

  let buttonStyle =
    supplier !== 'selectSupplier' && file && !loading
      ? 'bg-purple-700 hover:bg-purple-500'
      : 'bg-gray-500';

  return (
    <div className='h-screen'>
      <form
        className='flex flex-col w-1/3 mx-auto mt-40 bg-gray-700 p-10 rounded text-center'
        onSubmit={e => {
          e.preventDefault();
          updateFile();
        }}
      >
        <h2 className='text-4xl mb-10'>Price-Machine</h2>
        <select
          className='text-black rounded p-2 mb-10'
          onChange={handleChange}
          value={supplier}
        >
          <option value='selectSupplier'>---Please Select Supplier---</option>
          <option value='feniks'>Feniks</option>
          <option value='imob'>Imob</option>
          <option value='ims'>Ims</option>
          <option value='mikar'>Mikar</option>
          <option value='pphu'>PPHU</option>
        </select>
        <label className='text-left mb-5'>
          Upload Packing List -{' '}
          <span className='text-sm'>File must be formatted correctly.</span>
        </label>
        <input
          type='file'
          onChange={handleFileChange}
          disabled={supplier === 'selectSupplier'}
        />
        <button
          className={`rounded px-6 py-2 w-1/3 mx-auto my-10 ${buttonStyle}`}
          disabled={buttonStyle === 'bg-gray-500'}
        >
          {loading ? 'Calculating...' : 'Submit'}
        </button>
        {loading && (
          <div className='animate-spin-slow w-min h-min rounded-full bg-gray-700 mx-auto'>
            <div className='bg-gray-700 rounded-full h-10 w-10 border-t-4 border-purple-700'></div>
          </div>
        )}
        {data && data}
      </form>
    </div>
  );
};

export default PriceMachine;
