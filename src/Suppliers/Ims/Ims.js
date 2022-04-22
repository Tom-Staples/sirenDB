import React from 'react';
import barbican from '../../images/imsBarbican.jpg';
import archieII from '../../images/imsArchieII.jpg';
import sansa from '../../images/imsSansa.jpg';
import rebecca from '../../images/imsRebecca.jpg';
import samantha from '../../images/imsSamantha.jpg';
import SupplierCard from '../../components/SupplierCard/SupplierCard';

const Ims = () => {
  const models = [
    { name: 'Barbican', img: barbican },
    { name: 'Archie II', img: archieII },
    { name: 'Sansa', img: sansa },
    { name: 'Rebecca', img: rebecca },
    { name: 'Samantha', img: samantha }
  ];

  return (
    <SupplierCard
      models={models}
      supplier='Ims'
      description='Ims is based in Poland. It manufactures a variety of models for John
  Lewis and independent customers. They usually deliver 8 - 12 trucks per
  month. The payment terms are 30 days from date of invoice and are
  invoiced in Euros.'
    />
  );
};

export default Ims;
