import React from 'react';
import SupplierCard from '../../components/SupplierCard/SupplierCard';
import chesterfield from '../../images/feniksChesterfield.jpg';

const Feniks = () => {
  const models = [{ name: 'Chesterfield', img: chesterfield }];
  return (
    <SupplierCard
      supplier='Feniks'
      models={models}
      description='Feniks is based in poland. It manufactures the Chesterfield model for
  John Lewis. They usually deliver 1 truck per month. The payment terms
  are 60 days from date of invoice and are invoiced in Sterling.'
    />
  );
};

export default Feniks;
