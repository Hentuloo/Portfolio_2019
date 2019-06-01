import styled from 'styled-components';

const Paragraph = styled.p`
  background-color: ${({ theme }) => theme.redFirst};
  text-transform: uppercase;
  font-weight: ${({ theme, bold }) =>
    bold ? theme.font.bold : theme.font.ligth};
`;
export default Paragraph;
