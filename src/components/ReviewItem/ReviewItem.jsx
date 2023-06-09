import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'

const ReviewItem = ({product,handleRemoveFromCart}) => {
    const {img,name,id,price,quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-detail'>
                <p className='product-title'>{name}</p>
                <p>price: <span className='orange-text'>${price}</span></p>
                <p>Quantity: {quantity}</p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;