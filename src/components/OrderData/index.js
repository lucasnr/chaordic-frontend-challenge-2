import React from 'react';

import { Section, Subtitle } from '../Section';
import { Container, Title, Group, Text } from './styles';

export default function OrderData() {
  return (
    <Section>
      <Title>Dados do Pedido</Title>

      <Container>
        <Group>
          <Subtitle>Comprado em</Subtitle>
          <Text>05 de Fevereiro de 2019, às 19h30</Text>
        </Group>
        <Group>
          <Subtitle>Ponto de Venda</Subtitle>
          <Text>E-commerce</Text>
        </Group>
        <Group>
          <Subtitle>Modalidade de Entrega</Subtitle>
          <Text>F1 Envio pela loja, F2 Retira em Loja</Text>
        </Group>
      </Container>
    </Section>
  );
}
