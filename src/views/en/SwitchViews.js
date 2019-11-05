import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Constants from 'config/Constants';
import withContext from 'hoc/withContext';

import Portfolio from './Portfolio';
import Contact from './Contact';
import Projects from './Projects';

class SwitchViews extends Component {
  state = {
    currentPage: '',
    isLoading: false,
    timeoutFlag: false,
  };

  componentDidMount() {
    const { isLoading, timeoutFlag } = this.state;
    if (isLoading === true && timeoutFlag === false) {
      this.setState({ isLoading: false, timeoutFlag: false });
    }
  }

  componentDidUpdate() {
    const { isLoading, timeoutFlag } = this.state;
    if (isLoading === true && timeoutFlag === false) {
      this.setState({ timeoutFlag: true });

      const newTimeout = setTimeout(() => {
        window.clearTimeout(newTimeout);
        this.setState({ isLoading: false, timeoutFlag: false });
      }, Constants.GENERAL.boxAnimationDelay);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { currentPage } = prevState;
    const { page: nextPage } = nextProps;
    if (currentPage !== nextPage) {
      return { isLoading: true, currentPage: nextPage };
    }
    return null;
  }

  render() {
    const { langContext } = this.props;
    const { currentPage, isLoading } = this.state;

    const components = {
      portfolio: Portfolio,
      contact: Contact,
      contactSuccess: Contact,
      projects: Projects,
    };
    if (currentPage) {
      if (isLoading) return null;
      // choose correct componenet for page names
      const pagesKeys = Object.keys(Constants[langContext].PATHS);
      const currentPageName = pagesKeys.find(pageName => {
        if (Constants[langContext].PATHS[pageName] === currentPage) {
          return true;
        }
        return false;
      });

      const ComponentTagName = components[currentPageName];

      return <ComponentTagName />;
    }
    return null;
  }
}

SwitchViews.propTypes = {
  langContext: PropTypes.string.isRequired,
};

export default withContext(SwitchViews);
