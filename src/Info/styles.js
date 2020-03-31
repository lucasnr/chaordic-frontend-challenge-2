import styled from 'styled-components';

import { colorPrimary, colorSuccess, colorWarning } from '../colors';

export const Container = styled.section`
  display: flex;
  margin-top: 1rem;
`;

export const Group = styled.div`
  margin-right: 4rem;
`;

export const Label = styled.h2`
  color: ${colorPrimary};
  font-size: 0.875rem;
  margin: 0px;
`;

const Value = styled.h3`
  font-size: 0.9375rem;
  margin: 0px;
`;

export const Order = styled(Value)`
  margin-top: 1rem;
`;

export const Status = styled(Value)`
  font-weight: normal;
  margin-top: 1rem;

  &::before {
    background-color: ${colorWarning};
    border: 2px solid rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    content: ' ';
    display: inline-block;
    height: 0.875rem;
    margin-bottom: -3px;
    margin-right: 0.5rem;
    width: 0.875rem;
  }
`;

export const Related = styled(Value)`
  border: 1px solid ${colorSuccess};
  border-radius: 3px;
  color: ${colorSuccess};
  display: inline-block;
  margin-top: 0.5rem;
  margin-right: 0.75rem;
  padding: 0.25rem 0.375rem;
`;
