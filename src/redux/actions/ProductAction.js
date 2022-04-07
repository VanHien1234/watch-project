import { QLProductApi } from "API/ProductApi";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { RENDER_HOME, FETCH_DETAIL_PRODUCT,RENDER_LOGO } from 'redux/types/ProductType'



export const RenderHomePageAction = () => {

    return async(dispatch) => {
        try {
            dispatch(displayLoadingAction)
            const result = await QLProductApi.fetchAllMaleProduct()

            const logo = await QLProductApi.fetchBrandLogoApi()

            const female = await QLProductApi.fetchAllFemaleProduct()

            dispatch({
                type: RENDER_HOME,
                arrMale: result.data.data,
                arrFemale: female.data.data,
                arrBrandLogo: logo.data.data,

            })
            await dispatch(hideLoadingAction);

        } catch (errors) {
            console.log('error', errors)
            dispatch(hideLoadingAction);
        }
    }
}
export const GetProductDetailAction = (id) => {
    return async(dispatch) => {
        try {
            dispatch(displayLoadingAction)
            const result = await QLProductApi.fetchDetailProductApi(id)
            const random = await QLProductApi.fetchRandomProductApi()
            const logo = await QLProductApi.fetchBrandLogoApi()

            dispatch({
                type: FETCH_DETAIL_PRODUCT,
                arrProductDetail: result.data.data,
                arrRandom:random.data.data,
                arrBrandLogo: logo.data.data,
            })
            await dispatch(hideLoadingAction);
        } catch (error) {
            console.log('error detail product', error)
            dispatch(hideLoadingAction);

        }
    }
}
