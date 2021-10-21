import React from "react";
import SwitchButton from "../SwitchButton/index";

import "./styles.css";

function Header(props) {
	return (
		<>	
			<div className="topContainer">
				<h1>SASC-19</h1>
				<SwitchButton switchTheme={props.switchTheme}/>
			</div>
			<label className="labelH1">
				STATUS DE COVID-19 REFERENTE AOS PAÍSES DA AMERICA DO SUL!
			</label>
		</>
	);
}

export default Header;
