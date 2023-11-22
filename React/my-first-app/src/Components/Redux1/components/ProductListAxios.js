import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActionAxios } from '../actions';

const ProductListAxios = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);

    useEffect(()=>{
        dispatch(productActionAxios.fetchProductsAxios)
    },[]);

    return(
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) =>(
                    <li key = {product.id}>{product.name}</li>
                )
                )}
            </ul>
        </div>
    )


}

export default ProductListAxios;
