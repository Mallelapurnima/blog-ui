import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import{startSetPosts} from '../src/actions/posts'
import 'bootstrap/dist/css/bootstrap.min.css';

const store=configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(startSetPosts())
const ele=(
    <Provider store={store}>
        <App />
    </Provider>

)


ReactDOM.render(ele,document.getElementById('root'))