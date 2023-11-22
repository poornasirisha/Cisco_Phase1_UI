import ProductList from "./components/ProductList"
import ProductListAxios from "./components/ProductListAxios";
import store from "./store/store";
import {Provider} from 'react-redux';
import React from "react";

const ReduxParentProducts = () => {
    return(
        <Provider store={store}>
            <div>
                <ProductList />

                <p>Axios</p>
                <ProductListAxios />

            </div>
        </Provider>
    )
}

export default ReduxParentProducts;