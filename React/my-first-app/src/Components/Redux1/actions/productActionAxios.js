import {createAction} from '@reduxjs/toolkit';
import axios from 'axios';

const fetchProductRequest = createAction('FETCH_PRODUCTS_REQUEST');

export const fetchProductSuccess = (products) => ({
    type:'FETCH_PRODUCTS_SUCCESS',
    payload:products
});

export const fetchProductFailure = (error) => ({
    type:'FETCH_PRODUCTS_FAILURE',
    payload:error
});

export const fetchProductsAxios = () => {
    //thunk middleware code for asynchrnous operations
    return async (dispatch) =>{
        try{
            dispatch(fetchProductRequest());

            //make API call
            const response = await axios.get('http://localhost:5000/api/products');
            //const data = await response.json();

            dispatch(fetchProductSuccess(response.data));

        }
        catch(error){
            dispatch(fetchProductFailure(error.message));
        }

    }
}