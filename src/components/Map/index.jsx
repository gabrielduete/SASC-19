import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map(props) {
	const [teste, setTeste] = useState(0);
	const [theme,setTheme] = useState('');
	const [map, setMap] = useState(null);

	const L = require("leaflet");

	const mapa1 = L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png")
  const mapa2 = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")


	setTimeout(() => {
		setTeste(teste + 1);
	}, 1000);

	useEffect(() => {
		if(map){
		if(props.theme){
			setTheme('dark');
			mapa2.removeFrom(map);
      mapa1.addTo(map);

		}else{
			setTheme('light');
			mapa1.removeFrom(map);
      mapa2.addTo(map);
		}
	}
	}, [props.theme]);

	const paises = {
		"Argentina": [-40, -67, props.arrayCasos[0], props.arrayMortes[0], props.arrayMortesHoje[0], props.arrayRecuperados[0], props.arrayRecuperadosHoje[0]],
		"Brazil": [-14, -49.50, props.arrayCasos[1], props.arrayMortes[1], props.arrayMortesHoje[1], props.arrayRecuperados[1], props.arrayRecuperadosHoje[1]],
		"Bolivia": [-16, -64, props.arrayCasos[2], props.arrayMortes[2], props.arrayMortesHoje[2], props.arrayRecuperados[2], props.arrayRecuperadosHoje[2]],
		"Chile": [-39, -72.50, props.arrayCasos[3], props.arrayMortes[3], props.arrayMortesHoje[3], props.arrayRecuperados[3], props.arrayRecuperadosHoje[3]],
		"Colombia": [4.50, -73, props.arrayCasos[4], props.arrayMortes[4], props.arrayMortesHoje[4], props.arrayRecuperados[4], props.arrayRecuperadosHoje[4]],
		"Ecuador": [-1.50, -78.80, props.arrayCasos[5], props.arrayMortes[5], props.arrayMortesHoje[5], props.arrayRecuperados[5], props.arrayRecuperadosHoje[5]],
		"Falkland Islands (Malvinas)": [-51.80, -59, props.arrayCasos[6], props.arrayMortes[6], props.arrayMortesHoje[6], props.arrayRecuperados[6], props.arrayRecuperadosHoje[6]],
		"French Guiana": [4.10, -53.10, props.arrayCasos[7], props.arrayMortes[7], props.arrayMortesHoje[7], props.arrayRecuperados[7], props.arrayRecuperadosHoje[7]],
		"Guyana": [5.30, -59, props.arrayCasos[8], props.arrayMortes[8], props.arrayMortesHoje[8], props.arrayRecuperados[8], props.arrayRecuperadosHoje[8]],
		"Paraguay": [-23, -58, props.arrayCasos[9], props.arrayMortes[9], props.arrayMortesHoje[9], props.arrayRecuperados[9], props.arrayRecuperadosHoje[9]],
		"Peru": [-10, -76, props.arrayCasos[10], props.arrayMortes[10], props.arrayMortesHoje[10], props.arrayRecuperados[10], props.arrayRecuperadosHoje[10]],
		"Suriname": [4.20, -56.20, props.arrayCasos[11], props.arrayMortes[11], props.arrayMortesHoje[11], props.arrayRecuperados[11], props.arrayRecuperadosHoje[11]],
		"Uruguay": [-32.70, -55.80, props.arrayCasos[12], props.arrayMortes[12], props.arrayMortesHoje[12], props.arrayRecuperados[12], props.arrayRecuperadosHoje[12]],
		"Venezuela": [7, -65.50, props.arrayCasos[13], props.arrayMortes[13], props.arrayMortesHoje[13], props.arrayRecuperados[13], props.arrayRecuperadosHoje[13]],
	  }

	function mostrarMarcador(pais) {
		return (
			<Marker position={[paises[pais][0], paises[pais][1]]}>
				<Popup>
					<label>{`TOTAL DE CASOS NO ${pais.toUpperCase()}: ${paises[pais][2]}`}</label>
					<br></br>
					<br></br>

          			<label>{`TOTAL DE MORTES NO ${pais.toUpperCase()}: ${paises[pais][3]}`}</label>
					<br></br>
          			<label>{`TOTAL DE MORTES HOJE NO ${pais.toUpperCase()}: ${paises[pais][4]}`}</label>
					<br></br>
					<br></br>

          			<label>{`TOTAL RECUPERADOS NO ${pais.toUpperCase()}: ${paises[pais][5]}`}</label>
					<br></br>
          			<label>{`TOTAL RECUPERADOS HOJE NO ${pais.toUpperCase()}: ${paises[pais][6]}`}</label>
				</Popup>
			</Marker>
		);
	}


	return (
		<>
			<MapContainer
				center={[-23.6551563, -60.0]}
				zoom={3}
				scrollWheelZoom={false}
				whenCreated={setMap}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>

				{mostrarMarcador("Argentina")}
				{mostrarMarcador("Brazil")}
				{mostrarMarcador("Bolivia")}
				{mostrarMarcador("Chile")}
				{mostrarMarcador("Colombia")}
				{mostrarMarcador("Ecuador")}
				{mostrarMarcador("Falkland Islands (Malvinas)")}
				{mostrarMarcador("French Guiana")}
				{mostrarMarcador("Guyana")}
				{mostrarMarcador("Paraguay")}
				{mostrarMarcador("Peru")}
				{mostrarMarcador("Suriname")}
				{mostrarMarcador("Uruguay")}
				{mostrarMarcador("Venezuela")}
			</MapContainer>

		</>
	);
}

export default Map;
