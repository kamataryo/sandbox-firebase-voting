import styled from 'styled-components'
import { black } from '../colors'

export const Button = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: ${props => props.color};
  color: ${black};
  border-radius: 3px;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

export default Button
