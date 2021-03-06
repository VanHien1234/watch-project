import { QLProductApi } from "API/ProductApi";
import { NEWS_POST,DETAIL_POST } from "redux/types/PostType";

export const RenderPostAction = () => {
    return async(dispatch) => {
        try {
            const news = await QLProductApi.fetchNewsAPI()
            /* console.log('news', news); */
            dispatch({
                type: NEWS_POST,
                arrNews: news.data.data
            })

        } catch (errors) {
            console.log('error', errors)
        }
    }
}
export const RenderDetailPostAction = (id) => {
    return async(dispatch) => {
        try {
            const news = await QLProductApi.NewsDetailApi(id)
            console.log('news', news);
            dispatch({
                type: DETAIL_POST,
                arrNews: news.data.data
            })

        } catch (errors) {
            console.log('error', errors)
        }
    }
}
