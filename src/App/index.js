import React, { useState, useEffect } from 'react';

import { Container, DataContainer } from './styles';
import GlobalStyle from '../styles/GlobalStyle';
import Title from '../components/Title';
import Info from '../components/Info';
import ClientData from '../components/ClientData';
import PaymentData from '../components/PaymentData';
import OrderData from '../components/OrderData';
import Delivery from '../components/Delivery';

import { getOrder } from '../services/api';

export default function App() {
  const [order, setOrder] = useState(null);
  useEffect(() => {
    getOrder().then(({ data }) => {
      setOrder(data);
    });
  }, []);

  if (!order) return null;

  const {
    id,
    status,
    fulfillments,
    customer,
    billingAddress,
    payments,
    totals,
    createdAt,
    pointOfSale
  } = order;

  return (
    <>
      <GlobalStyle />
      <Title text="Tratamento de entregas" />
      <Container>
        <Info id={id} status={status} fulfillments={fulfillments} />

        <DataContainer>
          <ClientData {...{ ...customer, ...billingAddress }} />
          <PaymentData {...{ ...payments[0], ...totals }} />
        </DataContainer>

        <OrderData
          createdAt={createdAt}
          pointOfSale={pointOfSale}
          fulfillments={fulfillments}
        />

        {Object.entries(fulfillments).map(item => (
          <Delivery key={item[0]} {...item[1]} orderId={id} />
        ))}
      </Container>
    </>
  );
}
