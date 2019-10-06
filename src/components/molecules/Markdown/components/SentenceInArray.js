import styled, { css } from 'styled-components';

const SentenceInArray = styled.p`
  position: relative;
  display: inline-block;
  margin: 0px;
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(-6px);
    cursor: pointer;
  }
  &::before {
    content: '';
    position: absolute;
    width: 115%;
    height: 110%;
    left: 0%;
    top: 0%;
  }

  ${({ groupID, theme: { groupsColors } }) => {
    switch (Number(groupID)) {
      case 1:
        return css`
          color: ${groupsColors[6]};
        `;
      case 2:
        return css`
          color: ${groupsColors[2]};
        `;
      case 3:
        return css`
          color: ${groupsColors[1]};
        `;
      case 4:
        return css`
          color: ${groupsColors[3]};
        `;
      case 5:
        return css`
          color: ${groupsColors[4]};
        `;
      case 6:
        return css`
          color: ${groupsColors[6]};
        `;
      case 7:
        return css`
          color: ${groupsColors[0]};
        `;
      case 8:
        return css`
          color: ${groupsColors[4]};
        `;
      default:
        return css`
          color: ${groupsColors[0]};
        `;
    }
  }}
`;

export default SentenceInArray;
