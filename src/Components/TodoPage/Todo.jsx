import React, { useState, useContext, useEffect, useRef } from "react";
import {
	CircularProgressbarWithChildren,
	buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Todo.css";

const Todo = () => {
	const { id } = useParams();
	const { todos } = useContext(GlobalContext);

	const [currentTodo, setCurrentTodo] = useState({});
	const [timer, setTimer] = useState({
		minutes: 0,
		seconds: 0,
	});
	const [timerOn, setTimerOn] = useState(false);

	const { minutes, seconds } = timer;

	useEffect(() => {
		setCurrentTodo({ ...todos.filter((todo) => todo.id === +id)[0] });
	}, [id, todos]);

	useEffect(() => {
		setTimer({ minutes: +currentTodo.time, seconds: 0 });
	}, [currentTodo]);

	let timeSet = useRef();

	useEffect(() => {
		if (timerOn) {
			if (minutes === 0 && seconds === 0) {
				setTimerOn(false);
			} else if (seconds === 0) {
				timeSet.current = setTimeout(
					() => setTimer({ ...timer, seconds: 59, minutes: minutes - 1 }),
					1000
				);
			} else {
				timeSet.current = setTimeout(
					() => setTimer({ ...timer, seconds: seconds - 1 }),
					1000
				);
			}
		}
	});

	const resetTimer = (e) => {
		setTimerOn(false);
		clearTimeout(timeSet.current);
		setTimer({ minutes: +currentTodo.time, seconds: 0 });
	};

	return (
		<div className='todo'>
			<div className='todo-top'>
				<div className='progress-bar'>
					<CircularProgressbarWithChildren
						value={minutes * 60 + seconds}
						minValue={0}
						strokeWidth={5}
						background={true}
						maxValue={+currentTodo.time * 60}
						styles={buildStyles({
							strokeLinecap: "round",
							textSize: "0.75rem",
							pathTransitionDuration: 1,
							pathColor: `blue`,
							trailColor: `#fff`,
							backgroundColor: `#fff`,
						})}
					>
						<div className='mid-content'>
							<h1
								style={{
									color: "blue",
								}}
							>{`${minutes}m : ${seconds < 10 ? 0 : ""}${seconds}s`}</h1>
							<h3>{`Out of ${currentTodo.time} ${
								+currentTodo.time === 1 ? "minute" : "minutes"
							}`}</h3>
						</div>
					</CircularProgressbarWithChildren>
				</div>
				<div className='buttons'>
					<button className='btn' onClick={(e) => setTimerOn(true)}>
						Start
					</button>
					<button className='btn' onClick={(e) => setTimerOn(false)}>
						Pause
					</button>
					<button className='btn' onClick={resetTimer}>
						Reset
					</button>
				</div>
			</div>
			<div className='todo-bottom'>
				<h1>{currentTodo.title}</h1>
				{currentTodo.description && (
					<p className='description'>{currentTodo.description}</p>
				)}
			</div>
		</div>
	);
};

export default Todo;
