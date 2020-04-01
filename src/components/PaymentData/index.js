import React from 'react';

import { Section, Title, Subtitle } from '../Section';
import { Group, Label, Value } from './styles';

export default function PaymentData() {
  return (
    <Section>
      <Title>Dados do pagamento</Title>

      <Group>
        <Label>Subtotal</Label>
        <Value>R$500,00</Value>
      </Group>

      <Group>
        <Label>Frete</Label>
        <Value>R$200,00</Value>
      </Group>

      <Group>
        <Label>Desconto</Label>
        <Value>- R$10,00</Value>
      </Group>

      <Group>
        <Label>Valor total</Label>
        <Value>R$510,00</Value>
      </Group>

      <hr />

      <Subtitle>Método de Pagamento</Subtitle>
      <Group>
        <Label>VISA **** **** **** 3455 Exp. 23/02</Label>
        <Value>1x de R$510,00</Value>
      </Group>
    </Section>
  );
}
