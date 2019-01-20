import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  /**
   * shouldComponentUpdate
   * @param  {object} nextProps next props
   * @param  {object} nextState next state
   * @return {boolean}          should component update
   */
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>{'Hello'}</p>
        </header>
      </div>
    )
  }
}

export default App
