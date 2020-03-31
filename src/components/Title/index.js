import React from 'react';

import { Container } from './styles';

export default function Title({ text }) {
  return (
    <Container>
      <h1>{text}</h1>
    </Container>
  );
}
