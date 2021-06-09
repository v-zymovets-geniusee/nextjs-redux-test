import styled from 'styled-components';

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33px;
  padding: 0;
  border: solid 1px #dedede;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.accentMainColor};
  color: ${({ theme }) => theme.colors.white};
  width: 160px;
`;

export default IconButton;
