import React from 'react';

import { Section, Title, Subtitle } from '../Section';
import { Text, Address } from './styles';

export default function ClientData({
  name,
  email,
  telephone,
  zip,
  city,
  number,
  address1,
  state
}) {
  return (
    <Section>
      <Title>Dados do Cliente</Title>

      <Text>{name}</Text>
      <Text variant>434.654.123-90</Text>
      <Text>{email}</Text>
      <Text variant>{telephone.number}</Text>

      <Subtitle>Endereço de Cobrança</Subtitle>
      <Address>
        {address1}, {number} {city} - {state} - {zip}
      </Address>
      <Subtitle>Endereço de Entrega</Subtitle>
      <Address>
        {address1}, {number} {city} - {state} - {zip}
      </Address>
    </Section>
  );
}
