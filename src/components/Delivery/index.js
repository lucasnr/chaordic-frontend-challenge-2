import React, { useState, useCallback, useMemo } from 'react';
import { format, parseISO } from 'date-fns';

import { Title } from '../Section';
import {
  Container,
  Header,
  Identifier,
  Status,
  Details,
  DetailsGrid,
  Subtitle,
  Text,
  Table,
  Figure,
  Price
} from './styles';

import parseMoney from '../../utils/parseMoney';

export default function Deliver({
  orderId,
  id,
  type,
  freightCosts,
  shipment,
  items,
  status
}) {
  const [display, setDisplay] = useState(true);

  const handleClick = useCallback(() => {
    setDisplay(!display);
  }, [display]);

  const formatted = useMemo(() => {
    const newItems = Object.entries(items).map(item => ({
      ...item[1],
      priceFormatted: parseMoney(item[1].price),
      subtotal: parseMoney(item[1].price * item[1].quantity),
      total: parseMoney(
        item[1].price * item[1].quantity + freightCosts.totalPrice
      )
    }));

    const reducer = (accumulator, current) => accumulator + current;
    return {
      deliveryEstimatedDate: format(
        parseISO(freightCosts.deliveryEstimatedDate),
        'dd/MM/yyyy'
      ),
      freightCost: parseMoney(freightCosts.totalPrice),
      items: newItems,
      subtotal: parseMoney(
        newItems.map(item => item.quantity * item.price).reduce(reducer)
      ),
      totalFreightCosts: parseMoney(newItems.length * freightCosts.totalPrice),
      total: parseMoney(
        newItems.map(item => item.quantity * item.price).reduce(reducer) +
          newItems.length * freightCosts.totalPrice
      ),
      quantity: newItems.map(item => item.quantity).reduce(reducer)
    };
  }, [freightCosts, items]);

  return (
    <Container>
      <Header>
        <button onClick={handleClick}>
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
            />
          </svg>
        </button>

        <Identifier>
          <Text>Entrega {id}</Text>
          <Text>
            {orderId}-{id}
          </Text>
        </Identifier>

        <Status status={status}>
          <Subtitle>Status da entrega</Subtitle>
          <Text>
            {status === 'DELIVERED'
              ? 'Entregue'
              : status === 'PENDING'
              ? 'Pendente'
              : 'Separação'}
          </Text>
        </Status>
      </Header>

      {display && (
        <Details>
          <Title>Dados da Entrega</Title>

          <DetailsGrid>
            <div>
              <Subtitle>Retirado por</Subtitle>
              <Text>Alexandre de Oliveira Martins</Text>
              <Text>845.983.233-90</Text>
            </div>
            <div>
              <Subtitle>Modalidade</Subtitle>
              <Text>{type === 'SHIPMENT' ? 'Envio pela loja' : type}</Text>
            </div>
            <div>
              <Subtitle>Data Previsão Cliente</Subtitle>
              <Text>{formatted.deliveryEstimatedDate}</Text>
            </div>
            <div>
              <Subtitle>Endereço de entrega</Subtitle>
              <Text>
                {shipment.address1}, {shipment.number} {shipment.city} -{' '}
                {shipment.state}
              </Text>
              <Text>{shipment.zip}</Text>
            </div>
            <div>
              <Subtitle>Transportadora</Subtitle>
              <Text>SISTEMAS S.A</Text>
            </div>
            <div>
              <Subtitle>Tipo</Subtitle>
              <Text>{type}</Text>
            </div>
            <div>
              <Subtitle>Preço do Frete</Subtitle>
              <Text>{formatted.freightCost}</Text>
            </div>
            <div>
              <Subtitle>Data Previsão Transportadora</Subtitle>
              <Text>00/00/0000</Text>
            </div>
          </DetailsGrid>

          <hr />

          <Title>Detalhes da Entrega</Title>
          <Table>
            <table cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Sku</th>
                  <th>Qtd.</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                {formatted.items.map(item => (
                  <tr key={item.sku}>
                    <td>
                      <Figure>
                        <img src={item.image} alt={item.name} />
                        <figcaption>
                          {item.name} <br />
                          {item.color}, {item.size}
                        </figcaption>
                      </Figure>
                    </td>
                    <td>{item.sku}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <Price>
                        <span>Subtotal</span>
                        <span>{item.subtotal}</span>
                      </Price>
                      <Price>
                        <span>Frete</span>
                        <span>{formatted.freightCost}</span>
                      </Price>
                      <Price>
                        <span>Valor total</span>
                        <span>{item.total}</span>
                      </Price>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Price>
                      <span>
                        {formatted.quantity} unidades de{' '}
                        {formatted.items.length} itens
                      </span>
                    </Price>

                    <Price>
                      <span>Subtotal</span>
                      <span>{formatted.subtotal}</span>
                    </Price>

                    <Price>
                      <span>Frete total</span>
                      <span>{formatted.totalFreightCosts}</span>
                    </Price>

                    <Price>
                      <span>Valor total</span>
                      <span>{formatted.total}</span>
                    </Price>
                  </td>
                </tr>
              </tbody>
            </table>
          </Table>
        </Details>
      )}
    </Container>
  );
}
