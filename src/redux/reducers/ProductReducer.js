import { RENDER_HOME, FETCH_DETAIL_PRODUCT,RENDER_LOGO } from "redux/types/ProductType"



const stateDefault = {
    arrProduct: [],
    arr_Male_Product: [],
    arrProductDetail: [],
    arr_Female_Product: [],
    arrRandomProduct:[],
    arrBrandLogo:[],



}

export const ProductReducer = (state = stateDefault, action) => {
    let clonedState = {...state }

    switch (action.type) {
        case RENDER_HOME:
            {
                clonedState.arr_Female_Product = action.arrFemale
                clonedState.arr_Male_Product = action.arrMale
                clonedState.arrBrandLogo =action.arrBrandLogo
                return clonedState
            }
        case FETCH_DETAIL_PRODUCT:
            {
                clonedState.arrProductDetail = action.arrProductDetail
                clonedState.arrRandomProduct = action.arrRandom
                clonedState.arrBrandLogo =action.arrBrandLogo
                return clonedState
            }



        default:
            return clonedState
    }
}