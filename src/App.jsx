import React from "react";
import "./App.css";

import MapContainer from "./components/MapContainer";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sgeral from "./components/StatusGeral";

function App() {
	return (
		<section className="container">
			<header className="meuCabecalho">
				<Header />
			</header>

			<footer className="meuFooter">
				<Footer />
			</footer>

			<nav className="meuMapa">
				<MapContainer />
			</nav>

			<aside className="minhasEstatisticas">
				<Sgeral />
			</aside>

			<div className="meuTema">
				<Button />
			</div>
		</section>
	);
}

export default App;
