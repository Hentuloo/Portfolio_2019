import React from 'react';
import Constants from 'config/Constants';

const pageContext = React.createContext({
  previousPage: Constants.en.PATHS.portfiolio,
  currentPage: Constants.en.PATHS.portfiolio,
  onChangePage: null,
});

export default pageContext;
