import styled from 'styled-components';

import {
  colorPrimary,
  colorSuccess,
  colorWarning,
  colorInfo
} from '../../colors';

export const Container = styled.section`
  display: flex;
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
  margin-top: 0.5rem;
`;

export const Order = styled(Value)``;

export const Status = styled(Value)`
  font-weight: normal;

  &::before {
    background-color: ${props =>
      props.status === 'DELIVERED'
        ? colorSuccess
        : props.status === 'PENDING'
        ? colorWarning
        : colorInfo};
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
  margin-right: 0.75rem;
  padding: 0.125rem 0.375rem;
`;
