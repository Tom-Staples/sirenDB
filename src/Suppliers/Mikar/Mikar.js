import React from 'react';
import arlo from '../../images/mikarArlo.jpg';
import pillow from '../../images/mikarPillow.jpg';
import rise from '../../images/mikarRise.jpg';
import lennon from '../../images/mikarLennon.jpg';
import carnaby from '../../images/mikarCarnaby.jpg';
import SupplierCard from '../../components/SupplierCard/SupplierCard';

const Mikar = () => {
  const models = [
    { name: 'Arlo', img: arlo },
    { name: 'Pillow', img: pillow },
    { name: 'Rise', img: rise },
    { name: 'Lennon', img: lennon },
    { name: 'Carnaby', img: carnaby }
  ];

  return (
    <SupplierCard
      models={models}
      supplier='Mikar'
      description='Mikar is based in Poland. It manufactures a variety of models for John
 Lewis and Debenhams. They usually deliver 8 - 12 trucks per month. The
 payment terms are 21 days from date of invoice and are invoiced in
 Sterling.'
    />
  );
};

export default Mikar;
