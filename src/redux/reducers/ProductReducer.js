

import { FETCH_MALE_PRODUCT,FETCH_DETAIL_PRODUCT } from "redux/types/ProductType"


 
const stateDefault ={
    arrProduct : [],
    arr_Male_Product : [],//data api
    arrProductDetail:[],


    
}

export const ProductReducer = (state = stateDefault,action) =>{
    let clonedState = { ...state }

    switch(action.type){
        case FETCH_MALE_PRODUCT :{
            clonedState.arr_Male_Product= action.arrProduct
            return clonedState
        }
        case FETCH_DETAIL_PRODUCT:{
            clonedState.arrProductDetail = action.arrProductDetail
            return clonedState
        }


        default : return clonedState
    }
}