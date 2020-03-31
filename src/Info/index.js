import React from 'react';

import { Container, Group, Label, Order, Status, Related } from './styles';

export default function Info() {
  return (
    <Container>
      <Group>
        <Label>Pedido</Label>
        <Order>22071559</Order>
      </Group>
      <Group>
        <Label>Status do pedido</Label>
        <Status>Pendente</Status>
      </Group>
      <Group>
        <Label>Entregas relacionads</Label>
        <Related>F1</Related>
        <Related>F2</Related>
      </Group>
    </Container>
  );
}
