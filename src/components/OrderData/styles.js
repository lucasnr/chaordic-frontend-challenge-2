import styled from 'styled-components';

import { Title as SectionTitle } from '../Section';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

export const Group = styled.div`
  @media (min-width: 576px) {
    margin-right: 2rem;
  }

  @media (min-width: 768px) {
    margin-right: 5rem;
  }
`;

export const Title = styled(SectionTitle)`
  margin-bottom: 0px;
`;

export const Text = styled.h4`
  font-size: 0.75rem;
  margin: 0px;
  margin-top: 0.5rem;
`;
