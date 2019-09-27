import React from 'react';
import PropTypes from 'prop-types';
import FormNetlify from 'components/organisms/FormNetlify';

import Constants from 'config/Constants';
import withContext from 'hoc/withContext';

const Contact = ({ langContext }) => {
  const successInUrl = window.location.hash.substring(1);

  const successFormUrl = Constants[langContext].PATHS.contactSuccess;
  if (successInUrl === successFormUrl) {
    return <FormNetlify success />;
  }
  return <FormNetlify />;
};

Contact.propTypes = {
  langContext: PropTypes.string.isRequired,
};

export default withContext(Contact);
