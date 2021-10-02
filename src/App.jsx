import React from "react";
import "./App.css";

import MapContainer from "./components/MapContainer";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sgeral from "./components/StatusGeral";

function App() {
	return (
		<div className="container">
			<div className="meuCabecalho">
				<Header />
			</div>

			<div className="meuFooter">
				<Footer />
			</div>

			<div className="meuMapa">
				<MapContainer />
			</div>

			<div className="minhasEstatisticas">
				<Sgeral />
			</div>

			<div className="meuTema">
				<Button />
			</div>
		</div>
	);
}

export default App;
