import styled from 'styled-components';

import { Section, Subtitle as SectionSubtitle } from '../Section';
import { colorSecondary, colorSuccess } from '../../colors';

export const Container = styled(Section)`
  padding: 0px;
`;

export const Subtitle = styled(SectionSubtitle)`
  margin: 0px;
`;

export const Text = styled.h4`
  font-size: 0.75rem;
  margin: 0px;
  margin-top: 0.5rem;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  border-bottom: 1px solid #eee;

  button {
    background: ${colorSecondary};
    border: none;
    border-right: 1px solid #eee;
    color: rgba(0, 0, 0, 0.25);
    display: flex;
    padding: 1.5rem 1rem;

    svg {
      display: flex;
      height: 40px;
      width: 40px;
    }
  }
`;

export const Identifier = styled.div`
  margin: 0px 2rem;

  ${Text}:first-child {
    color: ${colorSuccess};
    margin-top: 0px;
  }
`;

export const Status = styled.div`
  margin: 0px 2rem;

  ${Text} {
    font-size: 0.875rem;
    font-weight: normal;

    &::before {
      background-color: ${colorSuccess};
      border: 2px solid rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      content: ' ';
      display: inline-block;
      height: 0.75rem;
      margin-bottom: -4px;
      margin-right: 0.5rem;
      width: 0.75rem;
    }
  }
`;

export const Details = styled.div`
  padding: 1rem;

  hr {
    margin: 2.5rem 0px;
  }
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

export const Table = styled.table`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-spacing: 0px;
  font-size: 0.75rem;
  font-weight: bold;
  overflow: hidden;
  width: 100%;

  thead tr {
    background-color: ${colorSecondary};
    color: rgba(0, 0, 0, 0.5);
    text-align: left;
    text-transform: uppercase;
  }

  th,
  td {
    padding: 0.75rem 1rem;
  }

  tbody tr {
    &:nth-child(even) {
      background-color: ${colorSecondary};
    }

    td:last-child {
      background-color: #fffff8;
      border-bottom: 1px solid #eee;
    }
  }
`;

export const Figure = styled.figure`
  align-items: center;
  display: flex;
  margin: 0px;

  img {
    border: 1px solid #eee;
    margin-right: 0.75rem;
    height: 60px;
    width: 60px;
  }

  figcaption {
    line-height: 1.5;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  &:nth-child(2) {
    margin-top: 2rem;
  }
`;
