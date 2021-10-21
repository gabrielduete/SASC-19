import React, { useState, useEffect, useCallback } from "react";
import { getCovidStatusCountries } from "../../api/api-covid";
import Map from "../Map";

function ApiCovid(props) {
	const [arrayCasos, setArrayCasos] = useState([]);
	const [arrayMortes, setArrayMortes] = useState([]);
	const [arrayMortesHoje, setArrayMortesHoje] = useState([]);
	const [arrayRecuperados, setArrayRecuperados] = useState([]);
	const [arrayRecuperadosHoje, setArrayRecuperadosHoje] = useState([]);

	const handleCovidData = useCallback(async () => {
		const { data } = await getCovidStatusCountries();

		setArrayCasos(data.map((item) => item.cases));
		setArrayMortes(data.map((item) => item.deaths));
		setArrayMortesHoje(data.map((item) => item.todayDeaths));
		setArrayRecuperados(data.map((item) => item.recovered));
		setArrayRecuperadosHoje(data.map((item) => item.todayRecovered));
	}, []);

	useEffect(() => {
		handleCovidData();
	}, [handleCovidData]);

	return (
		<Map
			arrayCasos={arrayCasos}
			arrayMortes={arrayMortes}
			arrayMortesHoje={arrayMortesHoje}
			arrayRecuperados={arrayRecuperados}
			arrayRecuperadosHoje={arrayRecuperadosHoje}
			theme={props.theme}
		/>
	);
}

export default ApiCovid;
