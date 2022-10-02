import { ActionTypes } from "../constants/actionypes";

export const setproduct = (product)=>{
        return{
            type: ActionTypes.SET_PRODUCT,
            payload:product
        }
};

export const selectedproduct = (product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
};
export const removeselectedproduct = (product)=>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
};