import React from 'react';

import { Section, Title, Subtitle } from '../Section';
import { Text, Address } from './styles';

export default function ClientData() {
  return (
    <Section>
      <Title>Dados do Cliente</Title>

      <Text>Renato Pereira</Text>
      <Text variant>434.654.123-90</Text>
      <Text>renato.pereira@email.com</Text>
      <Text variant>(11) 98376-6343</Text>

      <Subtitle>Endereço de Cobrança</Subtitle>
      <Address>Rua Oscar Freire, 333 São Paulo - SP - 00000-000</Address>
      <Subtitle>Endereço de Entrega</Subtitle>
      <Address>Rua Oscar Freire, 333 São Paulo - SP - 00000-000</Address>
    </Section>
  );
}
