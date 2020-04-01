import React, { useMemo } from 'react';
import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Section, Subtitle } from '../Section';
import { Container, Title, Group, Text } from './styles';

export default function OrderData({ createdAt, pointOfSale, fulfillments }) {
  const formatted = useMemo(() => {
    let fulfillmentsFormatted = Object.entries(fulfillments);
    fulfillmentsFormatted = fulfillmentsFormatted.map((item, index) => {
      return `${item[0]} ${
        item[1].type === 'SHIPMENT' ? 'envio pela loja' : ''
      }${index !== fulfillmentsFormatted.length - 1 ? ', ' : ''}`;
    });

    return {
      date: format(
        parseISO(createdAt),
        `dd 'de' MMMM 'de' yyyy', às' HH'h'mm`,
        {
          locale: ptBR
        }
      ),
      fulfillments: fulfillmentsFormatted
    };
  }, [createdAt, fulfillments]);

  return (
    <Section>
      <Title>Dados do Pedido</Title>

      <Container>
        <Group>
          <Subtitle>Comprado em</Subtitle>
          <Text>{formatted.date}</Text>
        </Group>
        <Group>
          <Subtitle>Ponto de Venda</Subtitle>
          <Text>{pointOfSale}</Text>
        </Group>
        <Group>
          <Subtitle>Modalidade de Entrega</Subtitle>
          <Text>{formatted.fulfillments}</Text>
        </Group>
      </Container>
    </Section>
  );
}
