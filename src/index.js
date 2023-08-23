import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const feeling = (state = 0, action) => {
    if (action.type === "ADD_FEELING") {
        console.log("value of feeling is now:", state);
        return action.payload;
    }
    return state
}

const understanding = (state = 0, action) => {
    if (action.type === "ADD_UNDERSTANDING") {
        return action.payload;
    }

    return state
}

const supported = (state = 0, action) => {
    if (action.type === "ADD_SUPPORTED") {
        return action.payload;
    }

    return state
}

const comments = (state = '', action) => {
    if (action.type === "ADD_COMMENTS") {
        return action.payload;
    }

    return state
}



const reduxStore = createStore(
    combineReducers({
        feeling,
        understanding,
        supported,
        comments,
    })
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
