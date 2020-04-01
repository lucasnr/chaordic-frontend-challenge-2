import styled from 'styled-components';

export const Text = styled.h3`
  font-size: 0.875rem;
  font-weight: ${props => (props.variant ? 'normal' : 'bold')};
  margin: 0px;
  margin-bottom: ${props => (props.variant ? '1rem' : '.25rem')};
`;

export const Address = styled.h4`
  font-size: 0.75rem;
  margin: 0px;
  margin-top: 0.25rem;
`;
