import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 타입 정의
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 변화를 일으키는 함수
function reducer(
	state = {
		toggle: false,
		counter: 0,
	},
	action
) {
	// action.type에 따라 다른 작업을 처리함
	switch (action.type) {
		case TOGGLE_SWITCH:
			return {
				...state, // 불변성 유지를 해 주어야 합니다.
				toggle: !state.toggle,
			};
		case INCREASE:
			return {
				...state,
				counter: state.counter + action.difference,
			};
		case DECREASE:
			return {
				...state,
				counter: state.counter - 1,
			};
		default:
			return state;
	}
}

// 프로젝트에 리덕스를 적용하기 위한, 스토어
const store = createStore(reducer);
const render = () => {
	const state = store.getState();

	if (state.toggle) {
		divToggle.classList.add("active");
	} else {
		divToggle.classList.remove("active");
	}
	counter.innerText = state.counter;
};
// 이벤트 감지 리스너
store.subscribe(render);

divToggle.onclick = () => {
	store.dispatch({ type: TOGGLE_SWITCH });
};
btnIncrease.onclick = () => {
	const difference = 1;
	store.dispatch({ type: INCREASE, difference });
};
btnDecrease.onclick = () => {
	store.dispatch({ type: DECREASE });
};
