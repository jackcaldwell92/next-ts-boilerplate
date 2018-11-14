import styled from '../styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-block-end: 10px;
  background-color: ${props => props.theme.midGrey};
  height: 50px;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.1);
`;
