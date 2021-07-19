import React from 'react';

import { Container, Title } from './styles';

interface SubHeaderProps {
  title: string;
}

const SubHeader: React.FC<SubHeaderProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default SubHeader;