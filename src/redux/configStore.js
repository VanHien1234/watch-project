import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { ProductReducer } from './reducers/ProductReducer'
import { PostReducer } from './reducers/PostReducer'
import { LoadingReducer } from './reducers/LoadingReducer'
import { CheckoutReducer } from './reducers/CheckoutReducer'

const rootReducer = combineReducers({
    //state app
    PostReducer,
    ProductReducer,
    LoadingReducer,
    CheckoutReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk));