
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import { reducer as marketReducer } from "./marketplaceReducer/reducer";
const rootReducer=combineReducers({
    marketReducer,
});

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));