import { ActionTypes } from "../constants/actionypes";

const initialsState = {
    products:[],
};

export const productReducer =(state = initialsState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return {...state,products:payload}
        default:
            return state;
    }
};

export const selectedproductReducer =(state = [],{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return { }
        default:
            return state;
    }
};