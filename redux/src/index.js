import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import kriptolist from './store/reducers/BitList';
import authreducers from './store/reducers/Authentic';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    datakripto: kriptolist,
    auth: authreducers
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

const Apps = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Apps, document.getElementById('root'));
registerServiceWorker();
