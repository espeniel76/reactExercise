import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Nori Collector!
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;