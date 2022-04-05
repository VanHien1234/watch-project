import { RENDER_HOME, FETCH_DETAIL_PRODUCT } from "redux/types/ProductType"



const stateDefault = {
    arrProduct: [],
    arr_Male_Product: [],
    arrProductDetail: [],
    arr_Female_Product: [],
    arr_News: [],
}

export const ProductReducer = (state = stateDefault, action) => {
    let clonedState = {...state }

    switch (action.type) {
        case RENDER_HOME:
            {
                clonedState.arr_Female_Product = action.arrFemale
                clonedState.arr_Male_Product = action.arrMale
                return clonedState
            }
        case FETCH_DETAIL_PRODUCT:
            {
                clonedState.arrProductDetail = action.arrProductDetail
                return clonedState
            }


        default:
            return clonedState
    }
}