import React, {useEffect} from 'react';
import { connect} from 'react-redux';
import {productAction} from '../actions';

const ProductList = ({products, loading,error, fetchProducts}) =>{
    useEffect(()=>{
        fetchProducts();
    },[]);

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Error: {error}</p>
    }

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

const mapStateToProps = (state) => ({
    products: state.products.products,
    loading: state.products.loading,
    error:state.products.error
});

const mapDispatchToProps = {
    ...productAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);