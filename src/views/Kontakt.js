import React from 'react';
import FormNetlify from 'components/organisms/FormNetlify';

const Kontakt = () => {
  const successInUrl = window.location.hash.substring(1);
  if (successInUrl === 'kontakt-success') {
    return <FormNetlify success />;
  }
  return <FormNetlify />;
};

export default Kontakt;
