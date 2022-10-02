import { combineReducers } from "redux";
import { productReducer,selectedproductReducer } from "./productRducers";


export const reducers = combineReducers({
    allProduct:productReducer,
    product:selectedproductReducer,
})