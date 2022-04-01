import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {ProductReducer} from './reducers/ProductReducer'
import { LoadingReducer } from './reducers/LoadingReducer'

const rootReducer = combineReducers({
    //state app
    
    ProductReducer,
    LoadingReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk));