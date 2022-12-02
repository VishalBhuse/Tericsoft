import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { EmpReducer } from "./reducer";

export const store = legacy_createStore(EmpReducer, applyMiddleware(thunk));
