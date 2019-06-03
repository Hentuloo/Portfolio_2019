import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const fristSecond = keyframes`
0%{
transform: scaleY(1) scaleX(1) translate(0%, 0%);
}
60%{
 transform: scaleY(0.3) scaleX(1) translate(0%, -200px);
}
100%{
 transform: scaleY(0.3) scaleX(1.5) translate(-10%, -200px);
}
`;
const fristThird = keyframes`
0%{
transform: scaleY(1) scaleX(1) translate(0%, 0%);
}
40%{
 transform: scaleY(0.3) scaleX(1) translate(0%, -150px);
}
70%{
   transform: scaleY(0.3) scaleX(1) translate(-30%, -150px);
}
100%{
  transform: scaleY(0.3) scaleX(1.8) translate(-30%, -150px);
}
`;
const secondThird = keyframes`
0%{
   transform: scaleY(0.3) scaleX(1.5) translate(-10%, -200px);
}
30%{
   transform: scaleY(0.3) scaleX(1.5) translate(-10%, -150px);
}
50%{
   transform: scaleY(0.3) scaleX(1.5) translate(-30%, -150px);
}
100%{
 transform: scaleY(0.3) scaleX(1.8) translate(-30%, -150px);
}
`;
const Box = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.redFirst};
  width: 150px;
  height: 200px;
  right: 0%;
  top: 0%;
  ${({ presentType, pastType }) => {
    if (pastType === 'first' && presentType === 'second') {
      // From first to Second 1=>2
      return css`
        animation: ${fristSecond} 1s linear forwards;
        transform: scaleY(0.3) scaleX(1.5) translate(-10%, 0px);
      `;
    }
    if (pastType === 'second' && presentType === 'first') {
      // From first to Second 2=>1
      return css`
        animation: ${fristSecond} 1s linear reverse;
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    }
    if (pastType === 'first' && presentType === 'third') {
      // From first to Second 1=>3
      return css`
        animation: ${fristThird} 1s linear forwards;
        transform: scaleY(0.3) scaleX(3) translate(-50%, 50%);
      `;
    }
    if (pastType === 'third' && presentType === 'first') {
      // From first to Second 3=>1
      return css`
        animation: ${fristThird} 1s linear reverse;
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    }
    if (pastType === 'second' && presentType === 'third') {
      // From first to Second 2=>3
      return css`
        animation: ${secondThird} 1s linear forwards;
        transform: scaleY(0.3) scaleX(1.8) translate(-30%, -200px);
      `;
    }
    if (pastType === 'third' && presentType === 'second') {
      // From first to Second 3=>2
      return css`
        animation: ${secondThird} 1s linear reverse;
        transform: scaleY(0.3) scaleX(2) translate(-10%, 50%);
      `;
    }
    return css`
      transform: scaleY(1) scaleX(1) translate(0%, 0%);
    `;
  }};
`;
class RightAnimatedBox extends Component {
  state = {
    pastType: '',
  };

  componentWillMount() {
    const { type } = this.props;
    const { pastType } = this.state;
    if (type !== pastType) {
      this.setState({ pastType: type });
    }
  }

  componentWillReceiveProps() {
    const { type } = this.props;
    const { pastType } = this.state;
    if (type !== pastType) {
      this.setState({ pastType: type });
    }
  }

  render() {
    const { type } = this.props;
    const { pastType } = this.state;
    return <Box key={Math.random()} presentType={type} pastType={pastType} />;
  }
}
RightAnimatedBox.propTypes = {
  type: PropTypes.string,
};
RightAnimatedBox.defaultProps = {
  type: 'first',
};

export default RightAnimatedBox;
