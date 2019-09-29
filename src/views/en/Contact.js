import React from 'react';
import PropTypes from 'prop-types';
import ContactTemplate from 'templates/ContactTemplate';

import Constants from 'config/Constants';
import withContext from 'hoc/withContext';

const Contact = ({ langContext }) => {
  const successInUrl = window.location.hash.substring(1);

  const successFormUrl = Constants[langContext].PATHS.contactSuccess;
  if (successInUrl === successFormUrl) {
    return <ContactTemplate success />;
  }
  return <ContactTemplate />;
};

Contact.propTypes = {
  langContext: PropTypes.string.isRequired,
};

export default withContext(Contact);
