import { combineReducers, createStore } from "redux";
import { AuthReducer } from "./AuthReducer";
import { calcReducer } from "./calculater/Calculaater";

console.log(AuthReducer);

const rootReducer = combineReducers({
  calculate: calcReducer,
  auth: AuthReducer,
});

export const store = createStore(rootReducer);

// store.subscribe(() => {
//   console.log("store", store.getState());
// });
