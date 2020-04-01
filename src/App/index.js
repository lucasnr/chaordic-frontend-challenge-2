import React from 'react';

import { Container } from './styles';
import GlobalStyle from '../styles/GlobalStyle';
import Title from '../components/Title';
import Info from '../components/Info';
import ClientData from '../components/ClientData';
import PaymentData from '../components/PaymentData';
import OrderData from '../components/OrderData';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Title text="Tratamento de entregas" />
      <Container>
        <Info />

        <ClientData />
        <PaymentData />
        <OrderData />
      </Container>
    </>
  );
}
