import React, { useState, useRef, useEffect } from 'react';
import './Timer.css';

function Timer(props) {
	const mainColours = ["hsl(2, 66%, 58%)", "hsl(118, 56%, 58%)", "hsl(203, 66%, 58%)"];
	const secondaryColours = ["hsl(357, 74%, 67%)", "hsl(118, 74%, 67%)", "hsl(196, 74%, 67%)"]
	const originalTime = useRef(props.timer)

	const handleColour = (e) => {
		switch(e.target.id){
			case "short-button":
				props.setTimer(props.shortTimer);
				originalTime.current = props.shortTimer;
				document.documentElement.style.setProperty('--main-colour', mainColours[1]);
				document.documentElement.style.setProperty('--secondary-colour', secondaryColours[1]);
				break;
			case "long-button":
				props.setTimer(props.longTimer);
				originalTime.current = props.longTimer;
				document.documentElement.style.setProperty('--main-colour', mainColours[2]);
				document.documentElement.style.setProperty('--secondary-colour', secondaryColours[2]);
				break;
			case "pomo-button":
				props.setTimer(props.pomoTimer);
				originalTime.current = props.pomoTimer;
				document.documentElement.style.setProperty('--main-colour', mainColours[0]);
				document.documentElement.style.setProperty('--secondary-colour', secondaryColours[0]);
				break;
			default:
				return;
		}
	}

	const [isActive, setIsActive] = useState(false);
  	const [isPaused, setIsPaused] = useState(false);
	const countRef = useRef(null)	  

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(true);
		countRef.current = setInterval(() => {
			props.setTimer((timer) => timer - 1)
		  }, 1000);
	}

	const handlePause = () => {
		clearInterval(countRef.current);
  		setIsPaused(false);
	}

	const handleResume = () => {
		setIsPaused(true);
		countRef.current = setInterval(() => {
			props.setTimer((timer) => timer - 1)
		  }, 1000)
	}

	const handleReset = () => {
		clearInterval(countRef.current);
		setIsActive(false);
		setIsPaused(false);
		props.setTimer(originalTime.current);
	}

	const formatTimer = () => {
		const seconds = `0${(props.timer % 60)}`.slice(-2);
		const minutes = `${Math.floor(props.timer / 60)}`;
 		const finalMinutes = `0${minutes % 60}`.slice(-2);
		return `${finalMinutes}:${seconds}`
	}

	useEffect(() => {
		if (props.timer === 0){
			let notification = new Audio('https://freesound.org/data/previews/316/316798_5383582-lq.mp3');
			notification.play();
			handleReset();
		}
	})

	return (
		<>
		<div id="timer-container">
			<div id="time-options">
				<button id="pomo-button" onClick={handleColour}>Pomodoro</button>
				<button id="short-button" onClick={handleColour}>Short Break</button>
				<button id="long-button" onClick={handleColour}>Long Break</button>
			</div>
			<h2 id="current-time">{formatTimer()}</h2>
			{!isActive ? 
			<button id="start-button" className="timer-control" onClick={handleStart}>START</button> : 
			<div id="button-container">
				{isPaused ? <button id="pause-button" className="timer-control" onClick={handlePause}><i className="fa fa-pause" /></button> :
				<button id="resume-button" className="timer-control" onClick={handleResume}><i className="fa fa-play" /></button>}
				<button id="reset-button" className="timer-control" onClick={handleReset}><i className="fa fa-redo" /></button>
			</div>}
		</div>
		</>
	)
}

export default Timer;