import React, { Component } from 'react'
import './App.css'
import TestTable from './components/TestTable'
import ResultSearch from './components/ResultSearch'

class App extends Component {
  render() {
    return (
      <TestTable />
      <ResultSearch />
    )
  }
}

export default App
