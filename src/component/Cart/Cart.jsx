import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
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
        </div>
    );
};

export default Cart;