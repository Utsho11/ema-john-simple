import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../assets/utilities/fakedb';
import Checkout from '../Checkout/Checkout';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
        <div className='review-container'>
           {
            cart.map(product => <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
           }
        </div>
        <div className='cart-container'>
            <Cart cart={savedCart}
             handleClearCart={handleClearCart}>
                <Link className='checkout-link' to="/checkout">
                        <button className='btn-checkout'>Checkout Order</button>
                </Link>
             </Cart>
        </div>
        </div>
    );
};

export default Order;