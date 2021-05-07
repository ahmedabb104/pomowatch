import React, { useState } from 'react';
import './Timer.css';

function Timer() {
	return (
		<>
		<div id="timer-container">
			<div id="time-options">
				<button>Pomodoro</button>
				<button>Short Break</button>
				<button>Long Break</button>
			</div>
			<h2 id="current-time">25:00</h2>
			<button id="start-button">START</button>
		</div>
		</>
	)
}

export default Timer;