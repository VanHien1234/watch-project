import { NEWS_POST,DETAIL_POST } from "redux/types/PostType";


const stateDefault = {
    arrPost: [],
    arrPostDetail: [],
}

export const PostReducer = (state = stateDefault, action) => {
    let clonedState = {...state }
    switch (action.type) {
        case NEWS_POST:
            {

                clonedState.arrPost = action.arrNews
                return clonedState
            }
        case DETAIL_POST:{
            clonedState.arrPostDetail = action.arrNews
            return clonedState
        }
        default:
            return clonedState
    }
}