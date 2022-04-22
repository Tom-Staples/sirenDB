import React from 'react';
import Imob from './Imob/Imob';
import PPHU from './PPHU/PPHU';
import Feniks from './Feniks/Feniks';
import Mikar from './Mikar/Mikar';
import Ims from './Ims/Ims';
import Valmedy from './Valmedy/Valmedy';

const Suppliers = () => {
  return (
    <div className='mx-10 mt-10'>
      <h1 className='text-5xl text-center'>Suppliers</h1>
      <div className='flex flex-wrap justify-center'>
        <Feniks />
        <Imob />
        <Ims />
        <Mikar />
        <PPHU />
        <Valmedy />
      </div>
    </div>
  );
};

export default Suppliers;
