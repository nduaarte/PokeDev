import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { RootState } from '../../Redux/PokeReducer';
import SubHeader from '../../Components/SubHeader';
import Pokemon from './Pokemon';
import Skills from './Skills';

import { Main, Ability, Move } from '../../services/RequestTypes';

const PokeInfo: React.FC = () => {
  const pokeName = useSelector((state: RootState) => state.PokeReducer.name);
  const [abilities, setAbilities] = useState<Ability[]>();
  const [moves, setMoves] = useState<Move[]>();
  const [sprite, setSprite] = useState<string>();

  useEffect(() => {
    async function fetchPokemonSkills() {
      axios.get<Main>(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(response => {
        setAbilities(response.data.abilities);
        setMoves(response.data.moves);
        setSprite(response.data.sprites.frontDefault);
      });
    }

    fetchPokemonSkills();
  }, []);

  return (
    <Fragment>
      <SubHeader title='Detalhes do Pokémon' />
      <Pokemon image={sprite} name={pokeName} />
      <Skills abilitiesProps={abilities} movesProps={moves} />
    </Fragment>
  );
}

export default PokeInfo;