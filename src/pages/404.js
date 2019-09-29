import { Component } from 'react';
import Constants from 'config/Constants';

class ErrorRedirect extends Component {
  state = {};

  componentDidMount() {
    // get all languages from Constants
    const allLanguages = Object.keys(Constants);
    const partsUrl = window.location.pathname.split('/');

    // find similar part to allLanguages shortcuts
    const currentLang = allLanguages.find(language => {
      return partsUrl.find(part => part.includes(language));
    });

    if (currentLang) {
      // find similar page path
      const allPaths = Object.keys(Constants[currentLang].PATHS);
      const currentPage = allPaths.find(path => {
        return partsUrl.find(part => part.includes(path));
      });
      if (currentPage) {
        window.location.href = `/${currentLang}/#${currentPage}`;
        return;
      }
      window.location.href = `/${currentLang}/#${
        Constants[currentLang].PATHS.portfolio
      }`;
    } else {
      const allEngPaths = Object.keys(Constants.en.PATHS);
      const currentPage = allEngPaths.find(path => {
        return partsUrl.find(part => part.includes(path));
      });
      if (currentPage) {
        window.location.href = `/en/#${currentPage}`;
        return;
      }
      // look in hash
      const hash = window.location.hash.slice(1);
      const PageFromHash = allLanguages.find(langObject => {
        const allPaths = Object.keys(langObject);
        return allPaths.find(path => langObject[path] === hash);
      });
      if (PageFromHash) {
        window.location.href = `/${PageFromHash}/#${hash}`;
      }
      const userLang = navigator.language || navigator.userLanguage;
      if (userLang === 'pl-PL') {
        window.location.href = `/pl/#${Constants.pl.PATHS.portfolio}`;
        return;
      }
      window.location.href = `/en/#${Constants.en.PATHS.portfolio}`;
    }
  }

  render() {
    return null;
  }
}
export default ErrorRedirect;
