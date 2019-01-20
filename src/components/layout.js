import styled from 'styled-components'
import { white, black } from '../colors'

export const Dl = styled.dl`
  margin: calc(10px + 2vmin);
`

export const Dt = styled.dt`
  text-align: left;
`

export const Dd = styled.dd`
  margin: 0;
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const AppContainer = styled.div`
  width: 100vw;
  background-color: ${black};
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: ${white};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`
