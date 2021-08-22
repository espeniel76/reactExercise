import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
	const state = useContext(ColorContext);
	return (
		<div>
			<h2>색상을 선택하세요.</h2>

			<div style={{ display: "flex" }}>
				{colors.map((color) => (
					<div
						key={color}
						style={{
							background: color,
							width: "24px",
							height: "24px",
							cursor: "pointer",
						}}
						onClick={() => state.setColor(color)}
						onContextMenu={(e) => {
							e.preventDefault();
							state.setSubcolor(color);
						}}
					></div>
				))}
			</div>

			<hr></hr>
		</div>
	);
};

export default SelectColors;
