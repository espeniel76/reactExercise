import { createStore } from "redux";

let store;

window.onload = () => {
	store = createStore(
		reducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	const oBtnRed = document.querySelector("input[value=Red]");
	const oBtnBlue = document.querySelector("input[value=Blue]");
	const oBtnGreen = document.querySelector("input[value=Green]");
	oBtnRed.addEventListener("click", () => {
		store.dispatch({ type: "CHANGE_COLOR", color: "red" });
	});
	oBtnBlue.addEventListener("click", () => {
		store.dispatch({ type: "CHANGE_COLOR", color: "blue" });
	});
	oBtnGreen.addEventListener("click", () => {
		store.dispatch({ type: "CHANGE_COLOR", color: "green" });
	});

	red();
	blue();
	green();
	store.subscribe(red);
	store.subscribe(blue);
	store.subscribe(green);
};

function reducer(state, action) {
	if (state === undefined) {
		return { color: "yellow" };
	}
	var newState;
	if (action.type === "CHANGE_COLOR") {
		newState = Object.assign({}, state, { color: action.color });
	}

	return newState;
}

function red() {
	var state = store.getState();
	document.querySelector("#red").style.backgroundColor = state.color;
}
function blue() {
	var state = store.getState();
	document.querySelector("#blue").style.backgroundColor = state.color;
}
function green() {
	var state = store.getState();
	document.querySelector("#green").style.backgroundColor = state.color;
}
