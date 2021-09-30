import React from 'react'

import ApiCovid from './componentes/ApiCovid'
import Cabecalho from './componentes/Cabecalho'
import Footer from './componentes/Footer'
import Sgeral from './componentes/StatusGeral'

import './css/App.css'

function App(){
  return (
    <div className = 'container'>
      
      <div className="meuCabecalho">
        <Cabecalho />
      </div>
      
      <div className="meuFooter">
        <Footer />
      </div>
      
      <div className="meuMapa">
        <ApiCovid />
      </div>
      
      <div className="minhasEstatisticas">
        <Sgeral />       
      </div>
      
    </div>
  )
}

export default App