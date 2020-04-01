import styled from 'styled-components';

import { colorDanger, colorSuccess } from '../../colors';

const Text = styled.h4`
  font-size: 0.75rem;
  margin: 0px;
`;

export const Label = styled(Text)``;

export const Value = styled(Text)``;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  &:nth-child(4) ${Value} {
    color: ${colorDanger};
  }

  &:nth-child(5) {
    margin: 1.5rem 0px;

    ${Value} {
      color: ${colorSuccess};
    }
  }

  &:last-child {
    margin-top: 0.5rem;
    margin-bottom: 0px;
  }
`;
