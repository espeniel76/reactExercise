import React, { useContext } from "react";
import { UserContext } from "./../store/users";

const Profile = () => {
	const context = useContext(UserContext);
	return (
		<div>
			<h3>{context.job}</h3>
		</div>
	);
};

export default Profile;
