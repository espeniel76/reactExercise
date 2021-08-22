import React from "react";
import SelectColors from "./components/SelectColors";
import ColorBox from "./components/ColorBox";
import { ColorStore } from "./contexts/color";

const Book = () => {
	return (
		<ColorStore>
			<div>
				<SelectColors></SelectColors>
				<ColorBox></ColorBox>
			</div>
		</ColorStore>
	);
};

export default Book;
