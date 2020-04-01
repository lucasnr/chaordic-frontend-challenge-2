import React, { useState, useCallback } from 'react';

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

import product from '../../assets/product.png';

export default function Deliver() {
  const [display, setDisplay] = useState(true);

  const handleClick = useCallback(() => {
    setDisplay(!display);
  }, [display]);

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
          <Text>Entrega F1</Text>
          <Text>22071559-F1</Text>
        </Identifier>

        <Status>
          <Subtitle>Status da entrega</Subtitle>
          <Text>Entregue</Text>
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
              <Text>Envio pela loja</Text>
            </div>
            <div>
              <Subtitle>Data Previsão Cliente</Subtitle>
              <Text>00/00/0000</Text>
            </div>
            <div>
              <Subtitle>Endereço de entrega</Subtitle>
              <Text>Rua Oscar Freire, 333 São Paulo - SP</Text>
              <Text>03745-001</Text>
            </div>
            <div>
              <Subtitle>Transportadora</Subtitle>
              <Text>SISTEMAS S.A</Text>
            </div>
            <div>
              <Subtitle>Tipo</Subtitle>
              <Text>Expressa</Text>
            </div>
            <div>
              <Subtitle>Preço do Frete</Subtitle>
              <Text>R$00,00</Text>
            </div>
            <div>
              <Subtitle>Data Previsão Transportadora</Subtitle>
              <Text>00/00/0000</Text>
            </div>
          </DetailsGrid>

          <hr />

          <Title>Detalhes da Entrega</Title>
          <Table cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Sku</th>
                <th>Qtd.</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Figure>
                    <img src={product} alt="product" />
                    <figcaption>
                      Tenis Coca Coca Loretto - Feminino <br />
                      Branco, Cinza, 39
                    </figcaption>
                  </Figure>
                </td>
                <td>AR384675</td>
                <td>2</td>
                <td>
                  <Price>
                    <span>Subtotal</span>
                    <span>R$100,00</span>
                  </Price>
                  <Price>
                    <span>Frete</span>
                    <span>R$5,00</span>
                  </Price>
                  <Price>
                    <span>Valor total</span>
                    <span>R$205,00</span>
                  </Price>
                </td>
              </tr>
            </tbody>
          </Table>
        </Details>
      )}
    </Container>
  );
}
