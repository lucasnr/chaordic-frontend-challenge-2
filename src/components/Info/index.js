import React from 'react';

import { Container, Group, Label, Order, Status, Related } from './styles';

export default function Info({ id, status, fulfillments }) {
  return (
    <Container>
      <Group>
        <Label>Pedido</Label>
        <Order>{id}</Order>
      </Group>
      <Group>
        <Label>Status do pedido</Label>
        <Status status={status}>
          {status === 'DELIVERED'
            ? 'Entregue'
            : status === 'PENDING'
            ? 'Pendente'
            : 'Separação'}
        </Status>
      </Group>
      <Group>
        <Label>Entregas relacionads</Label>
        {Object.entries(fulfillments).map(item => (
          <Related key={item[0]}>{item[0]}</Related>
        ))}
      </Group>
    </Container>
  );
}
