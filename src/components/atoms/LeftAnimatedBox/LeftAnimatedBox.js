import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const fristSecond = keyframes`
0%{
transform: scaleY(1) scaleX(1) translate(0%, 0%);
}
60%{
 transform: scaleY(0.3) scaleX(1) translate(0%, 300px);
}
100%{
 transform: scaleY(0.3) scaleX(1.6) translate(20px, 300px);
}
`;
const fristThird = keyframes`
0%{
transform: scaleY(1) scaleX(1) translate(0%, 0%);
}
60%{
 transform: scaleY(0.6) scaleX(1) translate(0%, 120px);
}

100%{
  transform: scaleY(0.6) scaleX(2.5) translate(30px, 120px);
}
`;
const secondThird = keyframes`
0%{
    transform: scaleY(0.3) scaleX(1.6) translate(20px, 300px);
}
40%{
   transform: scaleY(0.3) scaleX(1.6) translate(20px, 120px);
}
70%{
   transform: scaleY(0.3) scaleX(2.5) translate(30px, 120px);
}
100%{
transform: scaleY(0.6) scaleX(2.5) translate(30px, 120px);
}
`;
const Box = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.redSecondary};
  width: 100px;
  height: 400px;
  left: 0%;
  top: 0%;
  ${({ presentType, pastType }) => {
    if (pastType === 'first' && presentType === 'second') {
      // From first to Second 1=>2
      return css`
        animation: ${fristSecond} 1s linear forwards;
        transform: scaleY(0.3) scaleX(1.6) translate(20px, 300px);
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
        transform: scaleY(0.6) scaleX(2.5) translate(30px, 120px);
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
        transform: scaleY(0.6) scaleX(2.5) translate(30px, 120px);
      `;
    }
    if (pastType === 'third' && presentType === 'second') {
      // From first to Second 3=>2
      return css`
        animation: ${secondThird} 1s linear reverse;
        transform: scaleY(0.3) scaleX(1.6) translate(20px, 300px);
      `;
    }
    return css`
      transform: scaleY(1) scaleX(1) translate(0%, 0%);
    `;
  }};
`;
class LeftAnimatedBox extends Component {
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
LeftAnimatedBox.propTypes = {
  type: PropTypes.string,
};
LeftAnimatedBox.defaultProps = {
  type: 'first',
};

export default LeftAnimatedBox;
