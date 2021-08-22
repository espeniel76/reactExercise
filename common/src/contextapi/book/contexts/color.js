import { createContext, useState } from "react";

const ColorContext = createContext();

export const ColorStore = ({ children }) => {
	const [color, setColor] = useState("black");
	const [subcolor, setSubcolor] = useState("red");

	const colors = {
		color: color,
		subcolor: subcolor,
		setColor: function (_color) {
			setColor(_color);
		},
		setSubcolor: function (_color) {
			setSubcolor(_color);
		},
	};
	return (
		<ColorContext.Provider value={colors}>{children}</ColorContext.Provider>
	);
};

export default ColorContext;
