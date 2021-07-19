import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import arrowIcon from '../../../assets/arrow-right.png';

import { Container, Name, ArrowIcon } from './styles';

interface PokeNameProps {
  name: string;
}

const PokeName: React.FC<PokeNameProps> = ({ name }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  function dispatchToNavigate() {
    dispatch({ type: 'UPDATE_NAME', value: name });
    navigate('PokeInfo');
  }

  return(
    <Container onPress={dispatchToNavigate} >
      <Name>{name}</Name>
      <ArrowIcon resizeMode='contain' source={arrowIcon} />
    </Container>
  );
}

export default PokeName;