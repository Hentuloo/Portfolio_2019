import React from 'react';
import PropTypes from 'prop-types';

import Portfolio from 'views/Portfolio';
import Kontakt from 'views/Kontakt';
import Projekty from 'views/Projekty';

const SwitchViews = ({ page }) => {
  if (page === 'portfolio') {
    return <Portfolio />;
  }
  if (page === 'kontakt') {
    return <Kontakt />;
  }
  if (page === 'projekty') {
    return <Projekty />;
  }
  return null;
};
SwitchViews.propTypes = {
  page: PropTypes.string,
};
SwitchViews.defaultProps = {
  page: null,
};
export default SwitchViews;
