import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import productReducer from "./productReducer";


const rootReducer = combineReducers({
    products:productReducer,
    counter: counterReducer
});

export default rootReducer;