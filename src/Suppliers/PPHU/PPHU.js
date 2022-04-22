import React from 'react';
import SupplierCard from '../../components/SupplierCard/SupplierCard';
import barbican from '../../images/pphuBarbican.jpg';
import cape from '../../images/pphuCape.jpg';
import floyd from '../../images/pphuFloyd.jpg';
import joplin from '../../images/pphuJoplin.jpg';
import natalie from '../../images/pphuNatalie.jpg';

const PPHU = () => {
  const models = [
    { name: 'Barbican', img: barbican },
    { name: 'Cape', img: cape },
    { name: 'Floyd', img: floyd },
    { name: 'Joplin', img: joplin },
    { name: 'Natalie', img: natalie }
  ];

  return (
    <SupplierCard
      models={models}
      supplier='PPHU'
      description='PPHU is based in Poland. It manufactures a variety of models for John
 Lewis and independent customers. They usually deliver 4 trucks per
 month. The payment terms are immediate on date of invoice and are
 invoiced in Sterling.'
    />
  );
};

export default PPHU;
