import rootReducer from "../reducers";
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer:rootReducer,
    middleware:[thunk]
});

store.subscribe(() => {
    console.log('Current State', store.getState());
    const productState = store.getState().products;
    console.log("Current products state", productState);
})

export default store;