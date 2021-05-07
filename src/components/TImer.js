import React, { useState } from 'react';
import './Timer.css';

function Timer() {
	const mainColours = ["hsl(2, 66%, 58%)", "hsl(118, 56%, 58%)", "hsl(203, 66%, 58%)"];
	const secondaryColours = ["hsl(357, 74%, 67%)", "hsl(118, 74%, 67%)", "hsl(196, 74%, 67%)"]

	const handleColour = (e) => {
		switch(e.target.id){
			case "short-button":
				document.documentElement.style.setProperty('--main-colour', mainColours[1]);
				document.documentElement.style.setProperty('--secondary-colour', secondaryColours[1]);
				break;
			case "long-button":
				document.documentElement.style.setProperty('--main-colour', mainColours[2]);
				document.documentElement.style.setProperty('--secondary-colour', secondaryColours[2]);
				break;
			case "pomo-button":
				document.documentElement.style.setProperty('--main-colour', mainColours[0]);
				document.documentElement.style.setProperty('--secondary-colour', secondaryColours[0]);
				break;
		}
	}

	return (
		<>
		<div id="timer-container">
			<div id="time-options">
				<button id="pomo-button" onClick={handleColour}>Pomodoro</button>
				<button id="short-button" onClick={handleColour}>Short Break</button>
				<button id="long-button" onClick={handleColour}>Long Break</button>
			</div>
			<h2 id="current-time">25:00</h2>
			<button id="start-button">START</button>
		</div>
		</>
	)
}

export default Timer;