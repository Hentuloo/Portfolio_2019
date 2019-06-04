import React, { Component } from 'react';
import LeftBox from './LeftBox';
import RightBox from './RightBox';

class AnimatedBoxs extends Component {
  state = { previousPath: '', currentPath: '' };

  componentDidMount() {
    window.currentPath = window.location.pathname.substring(1); // .substring(16) for gh-pages
    let { previousPath, currentPath } = window;
    if (
      previousPath === undefined ||
      previousPath === '' ||
      previousPath === '/'
    ) {
      previousPath = 'portfolio';
    } else {
      previousPath = previousPath.substring(1);
    }
    if (
      currentPath === undefined ||
      currentPath === '' ||
      currentPath === '/'
    ) {
      currentPath = 'portfolio';
    } else {
      currentPath = window.location.pathname.substring(1); // .substring(16) for gh-pages
    }
    // console.log(previousPath);
    // console.log(currentPath);
    this.setState({ previousPath, currentPath });
  }

  render() {
    const { previousPath, currentPath } = this.state;
    return (
      <>
        <LeftBox currentPath={currentPath} previousPath={previousPath} />
        <RightBox currentPath={currentPath} previousPath={previousPath} />
      </>
    );
  }
}

export default AnimatedBoxs;
