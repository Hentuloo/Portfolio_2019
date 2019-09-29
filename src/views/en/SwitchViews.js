import React from 'react';
import PropTypes from 'prop-types';

import Constants from 'config/Constants';
import withContext from 'hoc/withContext';

import Portfolio from './Portfolio';
import Contact from './Contact';
import Projects from './Projects';

const SwitchViews = ({ page, langContext }) => {
  const components = {
    portfolio: Portfolio,
    contact: Contact,
    contactSuccess: Contact,
    projects: Projects,
  };

  if (page) {
    // choose correct componenet for page names
    const pagesKeys = Object.keys(Constants[langContext].PATHS);
    const currentPageName = pagesKeys.find(pageName => {
      if (Constants[langContext].PATHS[pageName] === page) {
        return true;
      }
      return false;
    });

    const ComponentTagName = components[currentPageName];
    return <ComponentTagName />;
  }
  return null;
};
SwitchViews.propTypes = {
  langContext: PropTypes.string.isRequired,
  page: PropTypes.string,
};
SwitchViews.defaultProps = {
  page: null,
};
export default withContext(SwitchViews);
