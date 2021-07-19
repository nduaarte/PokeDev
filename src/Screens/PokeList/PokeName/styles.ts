import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 17px 5px;
  border: 0.5px solid white;
  border-bottom-color: grey;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.dark};
`;

export const ArrowIcon = styled.Image`

`;
