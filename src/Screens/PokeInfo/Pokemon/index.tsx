import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Container, PokeImage, NameWrapper, NameText, PokeName } from './styles';

interface PokemonProps {
  image: ImageSourcePropType;
  name: string;
}

const Pokemon: React.FC<PokemonProps> = ({ image, name }) => {
  return(
    <Container>
      <PokeImage source={image} />

      <NameWrapper>
        <NameText>Nome:</NameText>
        <PokeName>{name}</PokeName>
      </NameWrapper>
    </Container>
  );
}

export default Pokemon;