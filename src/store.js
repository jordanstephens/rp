import { createStore } from "redux";

import rootReducer from "./reducers";
import defaultState from "./defaultState";

const store = createStore(rootReducer, defaultState);

export default store;
