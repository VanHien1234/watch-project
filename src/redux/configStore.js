import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { ProductReducer } from './reducers/ProductReducer'
import { PostReducer } from './reducers/PostReducer'
import { LoadingReducer } from './reducers/LoadingReducer'

const rootReducer = combineReducers({
    //state app
    PostReducer,
    ProductReducer,
    LoadingReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk));