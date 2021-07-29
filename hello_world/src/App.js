import "./App.css";
// import Hello from "./components/state1";
// import Hello from "./components/state2";
import List from "./components/List";
import { Component, useState, useEffect } from "react";

// function App() {
// 	return (
// 		<div className="App">
// 			<h1>state</h1>
// 			<Hello age={10}></Hello>
// 			<Hello age={20}></Hello>
// 			<Hello age={30}></Hello>
// 		</div>
// 	);
// }

const App = () => {
	const [todos, setTodos] = useState(["js공부"]);
	const [newTodo, setNewTodo] = useState();

	const changeInputData = (e) => {
		setNewTodo(e.target.value);
	};
	const addTodo = (e) => {
		setTodos([...todos, newTodo]);
	};
	useEffect(() => {
		console.log("새로운 내용이 렌더링됐네요", todos);
	}, [todos]);
	return (
		<div>
			<h1>todo 애플리케이션</h1>

			<input type="text" name="" onChange={changeInputData}></input>
			<button onClick={addTodo}>할일추가</button>

			<List todos={todos}></List>
		</div>
	);
};

export default App;
