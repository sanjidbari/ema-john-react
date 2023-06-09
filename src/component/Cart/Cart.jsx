import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({cart, handleClearCart, children}) => {
    let totalPrice = 0;
    let totalShippingCost = 0;
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShippingCost = totalShippingCost + product.shipping;
        quantity = quantity + product.quantity;  
    }
    
    let tax = totalPrice * .07;
    let grandTotal = totalPrice + totalShippingCost + tax;
    return (
        <div className='order-cart'>
            <h2>Order summary</h2>
            <p>Selected items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShippingCost}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            <button onClick={handleClearCart} className='cart-clear-btn'>Clear Cart<FontAwesomeIcon className='clear-cart-icon' icon={faTrash} /></button>
            {children}
        </div>
    );
};

export default Cart;