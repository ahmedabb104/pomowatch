import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	const [settings, setSettings] = useState(false);
	const showSettings = () => {
		if (click) {
			setSettings(true);
		} else {
			setSettings(false);
		}
	}
	window.addEventListener("click", showSettings)

	const closeSettings = () => setClick(false)

	return (
		<>
		<nav id='nav-container'>
			<h1><i className="fa fa-hourglass-end" /> Pomowatch</h1>
			<div className="buttons-container">
				<button id="settings-button" className="button" onClick={handleClick}><i className="fa fa-cog" /> Settings</button>
				<a id="github-button" className="button" href="https://github.com/ahmedabb104/pomowatch" target="_blank" rel="noreferrer"><i className="fa fa-github" /> Github</a>
			</div>
		</nav>
		{settings && 
		<div id="settings-menu">
			<div className="flex-component" id="settings-title">
				<h3>Timer Settings</h3>
				<i className="fa fa-times" onClick={closeSettings}/>
			</div>
			<div className="flex-component">
				<h4>Time (minutes)</h4>
				<div className="time-options-grid">
					<label for="pomodoro">Pomodoro</label>
					<label for="short">Short break</label>
					<label for="long">Long break</label>
					<input id="pomodoro" type="number" min="10" max="60" placeholder="25" />
					<input id="short" type="number" min="2" max="10" placeholder="5" />
					<input id="pomodoro" type="number" min="11" max="30" placeholder="15" />
				</div>
			</div>
		</div>}
		</>
	)
}

export default Navbar;