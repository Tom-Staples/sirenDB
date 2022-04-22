import React from 'react';
import abbeville from '../../images/imobAbbeville.jpg';
import kempton from '../../images/imobKempton.jpg';
import hendricks from '../../images/imobHendricks.jpg';
import camber from '../../images/imobCamber.jpg';
import camden from '../../images/imobCamden.jpg';
import SupplierCard from '../../components/SupplierCard/SupplierCard';

const Imob = () => {
  const models = [
    { name: 'Hendricks', img: hendricks },
    { name: 'Camber', img: camber },
    { name: 'Camden', img: camden },
    { name: 'Abbeville', img: abbeville },
    { name: 'Kempton', img: kempton }
  ];

  return (
    <SupplierCard
      models={models}
      supplier='Imob'
      description='Imob is based in Romania. It manufactures a variety of models for John
  Lewis and Debenhams. They usually deliver 8 - 12 trucks per month. The
  payment terms are 30 days from date of invoice and are invoiced in
  Sterling.'
    />
  );
};

export default Imob;
