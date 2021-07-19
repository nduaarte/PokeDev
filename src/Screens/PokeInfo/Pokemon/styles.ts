import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 30px 25px;
`;

export const PokeImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const NameWrapper = styled.View`
  margin-left: 12px;
`;

export const NameText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.medium};
  margin: 5px 0;
`;

export const PokeName = styled.Text`
  font-size: 23px;
  font-weight: bold;
`;

