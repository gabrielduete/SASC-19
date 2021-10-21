import React from "react";

import './style.css';


function SwitchButton(props) {
	return (
        <>
            <div className="switch__container" onChange={props.switchTheme}>
                <input id="switch-shadow" className="switch switch--shadow" type="checkbox" />
                <label htmlFor="switch-shadow"></label>
            </div>
        </>
    );
}

export default SwitchButton;
