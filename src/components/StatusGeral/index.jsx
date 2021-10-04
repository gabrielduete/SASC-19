import React, { useState, useEffect } from "react";

import "./styles.css";

const divInfo = (info, p) => {
	return (
		<div className="card">
			<label>{typeof info === 'number' ? (info).toLocaleString('pt-BR') : info}</label>
			<p>{p}</p>
		</div>
	);
};

function Sgeral() {
	const [status, setStatus] = useState({
		casosHoje: null,
		mortesHoje: null,
		recuperadosHoje: null,
		mortesTotal: null,
		recuperadosTotal: null,
		casosTotal: null,
	});

	useEffect(() => {
		fetch("https://disease.sh/v3/covid-19/all")
			.then((response) => {
				return response.json();
			})
			.then((jsonParsed) => {
				setStatus({
					casosHoje: jsonParsed.todayCases,
					mortesHoje: jsonParsed.todayDeaths,
					recuperadosHoje: jsonParsed.todayRecovered,
					mortesTotal: jsonParsed.deaths,
					recuperadosTotal: jsonParsed.recovered,
					casosTotal: jsonParsed.cases,
				});
			});
	}, []);

	return (
		<div>
			<h2>Estatísticas Mundiais COVID-19</h2>

			<div className="ContainerCards">
				<div className="containerHoje">
					{divInfo(status.casosHoje, "Casos Hoje")}
					{divInfo(status.mortesHoje, "Mortes Hoje")}
					{divInfo(status.recuperadosHoje, "Recuperados Hoje")}
				</div>

				<hr />

				<div className="containerTotal">
					{divInfo(status.casosTotal, "Casos")}
					{divInfo(status.mortesTotal, "Mortes")}
					{divInfo(status.recuperadosTotal, "Recuperados")}
				</div>
			</div>
		</div>
	);
}

export default Sgeral;
