import{createStore,combineReducers,applyMiddleware} from 'redux'
import postsReducer from '../reducers/postsReducers'
import authorsReducer from '../reducers/authorsReducer'
import thunk from 'redux-thunk'

//import thunk from 'redux-thunk'
const configureStore=()=>{
    const store=createStore(combineReducers({
        posts:postsReducer,
        authors:authorsReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore