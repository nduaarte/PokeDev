import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.primaryDark};
  height: 43px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.light};
`;
