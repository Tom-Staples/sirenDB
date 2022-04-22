import React from 'react';
import arlo from '../../images/valmedyArlo.jpg';
import kip from '../../images/valmedyKip.jpg';
import kixII from '../../images/valmedyKixII.jpg';
import duplet from '../../images/valmedyDuplet.jpg';
import sacha from '../../images/valmedySacha.jpg';
import SupplierCard from '../../components/SupplierCard/SupplierCard';

const Valmedy = () => {
  const models = [
    { name: 'Arlo', img: arlo },
    { name: 'Kip', img: kip },
    { name: 'Kix II', img: kixII },
    { name: 'Duplet', img: duplet },
    { name: 'Sacha', img: sacha }
  ];

  return (
    <SupplierCard
      models={models}
      supplier='Valmedy'
      description='Valmedy is based in Romania. It manufactures a variety of models for
 John Lewis. They usually deliver 1 truck per month. The payment terms
 are 30 days from date of invoice and are invoiced in Euros.'
    />
  );
};

export default Valmedy;
