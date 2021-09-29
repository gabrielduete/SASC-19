import React from 'react'
import ApiCovid from './componentes/ApiCovid'
import './App.css'

function App(){
  return (
    <div className = 'container'>
      
      <div class="meuCabecalho">
        <h1>cabecalho</h1>
      </div>
      
      <div class="meuFooter">
        <h2>Footer</h2>
      </div>
      
      <div class="meuMapa">
        <ApiCovid />
      </div>
      
      <div class="minhasEstatisticas">
        <h3>esta</h3>        
      </div>
    </div>
  )
}

export default App