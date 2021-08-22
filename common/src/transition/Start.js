import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";
import Transition from "./Transition";

const Start = () => {
	return (
		<Router>
			<Nav />
			<Transition />
		</Router>
	);
};

export default Start;
