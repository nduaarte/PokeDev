import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 0 25px;
`;

export const SkillText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.medium};
  margin-bottom: 3px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const AbilityName = styled.Text`
  margin: 0 20px 0 0;
  font-size: 16px;
  font-weight: bold;
`;

export const Moviment = styled.Text`
  margin: 5px 3px;
  font-size: 16px;
  font-weight: bold;

  padding: 3px 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.gray};
`;


