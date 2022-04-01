import { DISPLAY_LOADING,HIDE_LOADING } from "redux/types/LoadingType";

const stateDefault = {
    isLoading: false
}



export const LoadingReducer = (state = stateDefault, action) => {
    let clonedState = { ...state }
    switch (action.type) {
        case DISPLAY_LOADING:{
            clonedState.isLoading = true;
            return clonedState
        };
        case HIDE_LOADING:{
            clonedState.isLoading = false;
            return clonedState
        }
        default: {
            return clonedState
        }
    }
}