import React from 'react'
import ApiMapa from './componentes/ApiMapa'
import ApiCovid from './componentes/ApiCovid'
import './App.css'

function App(){
  return (
    <div className = 'container'>
      <ApiMapa />
      <ApiCovid />
    </div>
  )
}

export default App