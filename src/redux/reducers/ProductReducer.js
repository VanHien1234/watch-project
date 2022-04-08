import { RENDER_HOME, FETCH_DETAIL_PRODUCT,CATEGORY_PRODUCT } from "redux/types/ProductType"



const stateDefault = {
    arr_Male_Product: [],
    arrProductDetail: [],
    arr_Female_Product: [],
    arr_News: [],
    arrRandomProduct:[],
    arrBrandLogo:[],
    arrCategory:[],

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
        case CATEGORY_PRODUCT:
            {
                clonedState.arrCategory = action.arrCategory
                return clonedState
            }



        default:
            return clonedState
    }
}