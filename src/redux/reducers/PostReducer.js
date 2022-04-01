import { NEWS_POST } from "redux/types/PostType";

const stateDefault = {
    arrPost: [],
}

export const PostReducer = (state = stateDefault, action) => {
    console.log('first')
    let clonedState = {...state }
    switch (action.type) {
        case NEWS_POST:
            {

                clonedState.arrPost = action.arrNews
                return clonedState
            }
        default:
            return clonedState
    }
}