import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './ReviewItems.css'

const ReviewItems = ({item, handleRemoveItem}) => {
    const { img, price, name, id, quantity } = item;
    return (
        <div className='review-item'>
            <div className='item-details'>
                <img src={img} alt="" />
                <div className='item-description'>
                    <p className='item-title'>{name}</p>
                    <p>Price: <span className='orange-text'>${price}</span></p>
                    <p>Quantity: <span className='orange-text'>{quantity}</span></p>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemoveItem(id)} className='btn-delete'><FontAwesomeIcon className='trash-icon' icon={faTrash} /></button>
            </div>
        </div >
    );
};

export default ReviewItems;