import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../assets/utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products,setProduct] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then (res => res.json())
        .then(data => setProduct(data))
    },[])

    useEffect(()=>{
        const storeCart = getShoppingCart();
        const savedCart =[];
        // console.log(storeCart);
        // step1: get id
        for(const id in storeCart){
            // console.log(id);
            // step2: get product by using id
        const addedProduct = products.find(product => product.id === id)
        // console.log(addedProduct);
        if(addedProduct){
            // step3: get quantity of the product
            const quantity = storeCart[id];
            addedProduct.quantity = quantity;
            // step4: add addedProduct to saveCart
            savedCart.push(addedProduct)
        }
        }
        // step5: set the setCart
        setCart(savedCart)

    },[products])

    const handleAddToCart = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                handleClearCart={handleClearCart}>
                    <Link className='review-link' to="/order">
                        <button className='btn-review'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};


export default Shop;