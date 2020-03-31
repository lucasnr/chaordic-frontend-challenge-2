import React from 'react';

import { Container } from './styles';
import GlobalStyle from '../styles/GlobalStyle';
import Title from '../components/Title';
import Info from '../Info';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Title text="Tratamento de entregas" />
      <Container>
        <Info />
      </Container>
    </>
  );
}
