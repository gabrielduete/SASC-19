import React, { useState } from "react";
import "./App.css";

import MapContainer from "./components/MapContainer";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sgeral from "./components/StatusGeral";

function App() {
	const [darkTheme, setDarkTheme] = useState(false);

	function handleDarkTheme() {
		setDarkTheme(!darkTheme);
	}

	return (
		<section className={ darkTheme === true ? 'darkContainer': 'container' }>
			<header className="meuCabecalho">
				<Header switchTheme={handleDarkTheme} />
			</header>

			<footer className="meuFooter">
				<Footer />
			</footer>

			<nav className="meuMapa">
				<MapContainer theme={darkTheme}/>
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
