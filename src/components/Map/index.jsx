import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map(props) {
	const [teste, setTeste] = useState(0);

	setTimeout(() => {
		setTeste(teste + 1);
	}, 1000);

	const paises = {
		Argentina: [-40, -67, props.arrayCasos[0]],
		Brazil: [-14, -49.5, props.arrayCasos[1]],
		Bolivia: [-16, -64, props.arrayCasos[2]],
		Chile: [-39, -72.5, props.arrayCasos[3]],
		Colombia: [4.5, -73, props.arrayCasos[4]],
		Ecuador: [-1.5, -78.8, props.arrayCasos[5]],
		"Falkland Islands (Malvinas)": [-51.8, -59, props.arrayCasos[6]],
		"French Guiana": [4.1, -53.1, props.arrayCasos[7]],
		Guyana: [5.3, -59, props.arrayCasos[8]],
		Paraguay: [-23, -58, props.arrayCasos[9]],
		Peru: [-10, -76, props.arrayCasos[10]],
		Suriname: [4.2, -56.2, props.arrayCasos[11]],
		Uruguay: [-32.7, -55.8, props.arrayCasos[12]],
		Venezuela: [7, -65.5, props.arrayCasos[13]],
	};

	function mostrarMarcador(pais) {
		return (
			<Marker position={[paises[pais][0], paises[pais][1]]}>
				<Popup>
					<label>{`TOTAL DE CASOS NO ${pais.toUpperCase()}: ${
						paises[pais][2]
					}`}</label>
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
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
