import React from "react";
import About from "./pages/About";
import Profile from "./pages/Profile";
import UserStore from "./store/users";

const Youtube = () => {
	return (
		<UserStore>
			<div>
				<About></About>
				<Profile></Profile>
			</div>
		</UserStore>
	);
};

export default Youtube;
