import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Api(){
  
  const paises = {
    "Argentina": [-40, -67],
    "Bolivia": [-16, -64],
    "Brazil": [-14, -49.50],
    "Chile": [-39, -72.50],
    "Colombia": [4.50, -73],
    "Ecuador": [-1.50, -78.80],
    "Falkland Islands (Malvinas)": [-51.80, -59],
    "French Guiana": [4.10, -53.10],
    "Guyana": [5.30, -59],
    "Paraguay": [-23, -58],
    "Peru": [-10, -76],
    "Suriname": [4.20, -56.20],
    "Uruguay": [-32.70, -55.80],
    "Venezuela": [7, -65.50],
  }

  function mostrarMarcador(pais){
    return(
      <Marker position={[paises[pais][0], paises[pais][1]]}>
          
        <Popup>
          <label>{`TOTAL DE CASOS NO ${pais.toUpperCase()}: `}</label>
        </Popup>
  
      </Marker>
    )
  }

  function geraMarcadores(){

    for (let v in paises){
      mostrarMarcador(v.toString())
      console.log(v)
    }
    console.log(Object.keys(paises))
    // for (var i = 0; i <= 14; i++){
    //   mostrarMarcador()
    // }

    // {mostrarMarcador('Brazil')}
    // {mostrarMarcador('Paraguay')}
    // {mostrarMarcador('Argentina')}
    // {mostrarMarcador('Bolivia')}
    // {mostrarMarcador('Colombia')}
    // {mostrarMarcador('Peru')}
    // {mostrarMarcador('Chile')}
    // {mostrarMarcador('Falkland Islands (Malvinas)')}
    // {mostrarMarcador('Uruguay')}
    // {mostrarMarcador('Guyana')}
    // {mostrarMarcador('Venezuela')}
    // {mostrarMarcador('Ecuador')}
    // {mostrarMarcador("French Guiana")}
    // {mostrarMarcador('Suriname')}
  }

  return (
    
    <>
      <MapContainer 
        center={[-15.6551563, -60.000]} 
        zoom={3} 
        scrollWheelZoom={false}>

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* <Marker position={[4.10, -53.10]}>
        
          <Popup>
            Popup teste
          </Popup>

        </Marker> */}

        {geraMarcadores()}

        {/* Fazer uma função pra dar todas esses mostrarMarcador no mapa */}

      </MapContainer>
    </>
  )
}

export default Api