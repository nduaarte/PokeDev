import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import axios from 'axios';

import SubHeader from '../../Components/SubHeader';
import PokeName from './PokeName';

export interface Pokename {
  name: string;
}

const PokeList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokename[]>([]);

  useEffect(() => {
    async function fetchPokemons() {
      const { data } = await axios('https://pokeapi.co/api/v2/pokemon');

      setPokemons(data.results);
    }

    fetchPokemons();
  }, []);

  return (
    <Container>
      <SubHeader title='Lista de Pokémons' />

      <Wrapper>
        <List
          data={pokemons}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <PokeName name={item.name} />}
        />
      </Wrapper>

    </Container>
  );
}

export default PokeList;

const Container = styled.View``;

const List = styled.FlatList``;

const Wrapper = styled.View`
  padding: 15px;
`;

