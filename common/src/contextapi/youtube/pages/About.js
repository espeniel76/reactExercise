import React, { useContext } from "react";
import { UserContext } from "./../store/users";

const About = () => {
	const context = useContext(UserContext);
	return (
		<div>
			<h3>{context.name}</h3>
		</div>
	);
};

export default About;
