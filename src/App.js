import React from 'react'
import { useFirebase, resetFirebase } from './hooks'
import { PieChart, Pie, Cell } from 'recharts'
import Button from './components/button'

import { AppContainer, MainContainer, Dl, Dt, Dd } from './components/layout'

import { purple, chartColors } from './colors'

const options = [
  { id: 0, name: '台南担仔麺' },
  { id: 1, name: '魯肉飯' },
  { id: 2, name: '虱目魚粥' },
  { id: 3, name: '排骨飯' },
]

export const App = () => {
  const [{ data, isReady }, incrementValueOf] = useFirebase()

  if (!isReady) {
    return (
      <main className={ 'App' }>
        <AppContainer>{'loading...'} </AppContainer>
      </main>
    )
  }

  const chartData = options.map(({ id, name }) => ({
    id,
    name,
    value: data[id],
  }))

  return (
    <main className={ 'App' }>
      <AppContainer>
        <header>
          <h1>
            <small>{'リアルタイム投票で決める'}</small>
            <br />
            {'最強台湾料理決定戦'}
          </h1>
          <p>
            {'GitHub: '}
            <a
              href="https://github.com/kamataryo/sandbox-firebase-voting"
              target={ '_blank' }
            >
              {'kamataryo/sandbox-firebase-voting'}
            </a>
          </p>
        </header>
        <MainContainer>
          <div>
            {options.map(({ id, name }, index) => (
              <Dl key={ id }>
                <Dt>{name}</Dt>
                <Dd>
                  <span>{`現在 ${data[id] || 0}票`}</span>
                  <Button
                    color={ chartColors[index % chartColors.length] }
                    onClick={ () => incrementValueOf(id) }
                  >
                    {'+1'}
                  </Button>
                </Dd>
              </Dl>
            ))}
          </div>
          <div>
            <PieChart width={ 210 } height={ 210 }>
              <Pie
                animationDuration={ 200 }
                data={ chartData }
                dataKey={ 'value' }
                nameKey={ 'name' }
                cx={ '50%' }
                cy={ '50%' }
                innerRadius={ 60 }
                outerRadius={ 100 }
                fill={ purple }
                labelLine={ false }
              >
                {chartData.map(({ id }, index) => (
                  <Cell
                    key={ id }
                    fill={ chartColors[index % chartColors.length] }
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </MainContainer>
        <div>
          <p>
            <button onClick={ resetFirebase }>{'全てを無に帰す'}</button>
          </p>
        </div>
      </AppContainer>
    </main>
  )
}

export default App
