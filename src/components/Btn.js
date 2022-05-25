import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Btn = styled(Link)`
  border-radius: 2rem;
  background: ${ ({light}) => (light ? 'purple':'white') };
  white-space: nowrap;
  padding: .75rem 2rem;
  color: ${({light}) => (light ? 'white' : 'black')};
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;

  &:hover { 
    transition: all .2s ease-in-out;
    background: ${({ light }) =>
      (light ? 'white' : 'purple')};
    color: ${({light}) => (light ? 'black' : 'white')};
  }
`