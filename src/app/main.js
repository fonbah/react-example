import '../assets/style.scss'
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import App from './components/app';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk))

const container = document.createElement('div')
document.body.appendChild(container)

render(
    <Provider store={store}>
        <BrowserRouter>
            <App dispatch={store.dispatch}/>
        </BrowserRouter>
    </Provider>
    , container
)
