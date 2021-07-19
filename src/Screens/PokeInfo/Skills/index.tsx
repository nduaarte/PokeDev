import React, { useEffect, useState } from 'react';

import { Container, SkillText, Wrapper, AbilityName, Moviment } from './styles';

import { Ability, Move } from '../../../services/RequestTypes';

interface SkillsProps {
  abilitiesProps: Ability[];
  movesProps: Move[];
}

const Skills: React.FC<SkillsProps> = ({ abilitiesProps, movesProps }) => {
  const [abilities, setAbilities] = useState<JSX.Element[]>();
  const [moves, setMoves] = useState<JSX.Element[]>();

  useEffect(() => {
    if (abilitiesProps === undefined) return;

    const abilitiesNames = abilitiesProps.map(item => (
      <AbilityName>{item.ability.name}</AbilityName>
    ));

    setAbilities(abilitiesNames);
  }, [abilitiesProps]);

  
  useEffect(() => {
    if (movesProps === undefined) return;

    const movesNames = movesProps.map(item => (
      <Moviment>{item.move.name}</Moviment>
    ));
    setMoves(movesNames);

  }, [movesProps]);

  return (
    <Container>
      <SkillText>Habilidades:</SkillText>
      <Wrapper>
        {abilities}
      </Wrapper>

      <SkillText>Movimentos:</SkillText>
      <Wrapper>
        {moves}
      </Wrapper>
    </Container>
  );
}

export default Skills;