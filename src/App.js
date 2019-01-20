import React from 'react'
import { useFirebase } from './hooks'
import { PieChart, Pie, Cell } from 'recharts'
import Button from './components/button'

import './App.css'
import { AppContainer, Dl, Dt, Dd } from './components/layout'

import { purple, chartColors } from './colors'

const options = [
  { id: 0, name: 'ぎょうざ' },
  { id: 1, name: 'しゅうまい' },
  { id: 2, name: 'あげそば' },
  { id: 3, name: 'ラーメン' },
]

export const App = () => {
  const [{ data, isReady }, setData] = useFirebase()
  console.log(isReady)
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
        <div>
          {options.map(({ id, name }, index) => (
            <Dl key={ id }>
              <Dt>{name}</Dt>
              <Dd>
                <span>{`現在 ${data[id] || 0}票`}</span>
                <Button
                  color={ chartColors[index % chartColors.length] }
                  onClick={ () =>
                    setData({ ...data, [id]: (data[id] || 0) + 1 })
                  }
                >
                  {'+1'}
                </Button>
              </Dd>
            </Dl>
          ))}
        </div>
        <div>
          <PieChart width={ 700 } height={ 500 }>
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
              label={ a =>
                a.percent === 0
                  ? null
                  : a.name + ' ' + Math.round(a.percent * 100) + '%'
              }
              labelLine={ false }
            >
              {chartData.map(({ id }, index) => (
                <Cell key={ id } fill={ chartColors[index % chartColors.length] } />
              ))}
            </Pie>
          </PieChart>
        </div>
      </AppContainer>
    </main>
  )
}

export default App
