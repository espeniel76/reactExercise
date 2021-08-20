import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootRecucer = combineReducers({
	counter,
	todos,
});
export default rootRecucer;
