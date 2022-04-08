import { QLProductApi } from "API/ProductApi";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { RENDER_HOME, FETCH_DETAIL_PRODUCT,CATEGORY_PRODUCT } from 'redux/types/ProductType'



export const RenderHomePageAction = (nam,nu) => {
    /* console.log('nam',nam)
    console.log('nu',nu) */
    return async(dispatch) => {
        try {
            dispatch(displayLoadingAction)
            const result = await QLProductApi.fetchHomeProduct(nam)

            const logo = await QLProductApi.fetchBrandLogoApi()

            const female = await QLProductApi.fetchHomeProduct(nu)

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
export const CategoryProductAction = (type,brand)=>{
    console.log('type',type)
    console.log('brand',brand)
    return async(dispatch)=>{
        try {
            dispatch(displayLoadingAction)
            const result = await QLProductApi.CategoryApi(type,brand)
            console.log('category', result)

            dispatch({
                type: CATEGORY_PRODUCT,
                arrCategory:result.data.data
            })
            await dispatch(hideLoadingAction);
        }
        catch (error){
            console.log('error category product', error)
            dispatch(hideLoadingAction);

        }
    }
}
