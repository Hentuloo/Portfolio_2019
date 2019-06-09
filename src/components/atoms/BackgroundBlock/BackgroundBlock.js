import styled from 'styled-components';

const BackgroundBlock = styled.div`
  width: 120vw;
  height: 250vw;
  position: fixed;
  top: 100%;
  left: 100%;
  transform-origin: 50% center;
  transform: translate(-47%, -84%) rotate(26deg);
  background-color: ${({ theme }) => theme.grayFirst};
  z-index: -3;
`;
export default BackgroundBlock;
