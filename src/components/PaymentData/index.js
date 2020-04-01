import React, { useMemo } from 'react';

import { Section, Title, Subtitle } from '../Section';
import { Group, Label, Value } from './styles';

import parseMoney from '../../utils/parseMoney';

export default function PaymentData({
  subtotal,
  freightCosts,
  discount,
  total,
  brand,
  amount,
  installments,
  expiresAt,
  number
}) {
  const formatted = useMemo(() => {
    return {
      subtotal: parseMoney(subtotal),
      freightCosts: parseMoney(freightCosts),
      discount: parseMoney(discount),
      total: parseMoney(total),
      amount: parseMoney(amount)
    };
  }, [amount, discount, freightCosts, subtotal, total]);

  return (
    <Section>
      <Title>Dados do pagamento</Title>

      <Group>
        <Label>Subtotal</Label>
        <Value>{formatted.subtotal}</Value>
      </Group>

      <Group>
        <Label>Frete</Label>
        <Value>{formatted.freightCosts}</Value>
      </Group>

      <Group>
        <Label>Desconto</Label>
        <Value>- {formatted.discount}</Value>
      </Group>

      <Group>
        <Label>Valor total</Label>
        <Value>{formatted.total}</Value>
      </Group>

      <hr />

      <Subtitle>Método de Pagamento</Subtitle>
      <Group>
        <Label>
          {brand} {number} Exp. {expiresAt}
        </Label>
        <Value>
          {installments}x de {formatted.amount}
        </Value>
      </Group>
    </Section>
  );
}
