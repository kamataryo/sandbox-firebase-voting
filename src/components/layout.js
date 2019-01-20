import styled from 'styled-components'
import { white, black } from '../colors'

export const Dl = styled.dl``

export const Dt = styled.dt`
  text-align: left;
`

export const Dd = styled.dd`
  margin: 0;
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: ${black};
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: ${white};
`
