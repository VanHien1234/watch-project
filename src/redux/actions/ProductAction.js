import { QLProductApi } from "API/ProductApi";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { FETCH_MALE_PRODUCT,FETCH_DETAIL_PRODUCT} from 'redux/types/ProductType'



export const RenderHomePageAction =()=>{

    return async (dispatch) =>{
        try {
            const result = await QLProductApi.fetchAllMaleProduct()
            console.log('all male product',result.data.data )
            dispatch({
                type : FETCH_MALE_PRODUCT,
                arrProduct : result.data.data
            })

        }catch(errors){
            console.log('error',errors)
        }
    }
}
export const GetProductDetailAction =(id)=>{
    return async (dispatch)=>{
        try{
            const result = await QLProductApi.fetchDetailProductApi(id)
            console.log('detail product',result)
            dispatch({
                type: FETCH_DETAIL_PRODUCT,
                arrProductDetail:result.data.data
            })
        }
        catch(error){
            console.log('error detail product', error)

        }
    }
}



/* 
export const getMovieDetailAction = (maPhim) =>{
    return async (dispatch) =>{
        try{
            dispatch(displayLoadingAction)
            const movieDetail = await QLMovieApi.movieDetailApi(maPhim)
            const movieCredit = await QLMovieApi.movieCreditApi(maPhim)
            const movieVideo = await QLMovieApi.movieVideoApi(maPhim)

            console.log('getmoviedetail',movieDetail.data)
            console.log('movieCredit',movieCredit.data)
            console.log('movieVideo',movieVideo)

            
            dispatch({
                type : GET_MOVIE_DETAIL,
                arrMovieDetail : movieDetail.data,
                arrMovieCredit : movieCredit.data.cast,
                arrMovieVideo :  movieVideo.data.results
            }
            )
            await dispatch(hideLoadingAction);
        }
        catch(error){
            console.log('error movie detail',error)
            dispatch(hideLoadingAction);
        }
    }
} */




