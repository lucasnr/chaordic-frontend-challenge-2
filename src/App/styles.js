import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
`;

export const DataContainer = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.25fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1.5fr 1fr;
  }
`;
