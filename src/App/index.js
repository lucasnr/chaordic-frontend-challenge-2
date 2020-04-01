import React from 'react';

import { Container, DataContainer } from './styles';
import GlobalStyle from '../styles/GlobalStyle';
import Title from '../components/Title';
import Info from '../components/Info';
import ClientData from '../components/ClientData';
import PaymentData from '../components/PaymentData';
import OrderData from '../components/OrderData';
import Delivery from '../components/Delivery';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Title text="Tratamento de entregas" />
      <Container>
        <Info />

        <DataContainer>
          <ClientData />
          <PaymentData />
        </DataContainer>

        <OrderData />

        <Delivery />
      </Container>
    </>
  );
}
