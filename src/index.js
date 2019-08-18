import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let initialstate = ''
let reducer = (store, action) => {
    if(action && action.type === "weatherList"){
        return(store = {...store, data:action.payload});
    }
};
const store = createStore(reducer, initialstate)


ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));


serviceWorker.unregister();
