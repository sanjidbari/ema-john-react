import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css'
import { removeFromDb } from '../../assets/utilities/fakedb';
import { deleteShoppingCart } from '../../assets/utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleRemoveItem = id => {
        console.log(id)
        const remaining = cart.filter(item => item.id !== id)
        removeFromDb(id);
        setCart(remaining);      
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div>
                <h2>Ordered Products</h2>
                <div className='item-container'>
                {
                    cart.map(item => <ReviewItems
                        key={item.id}
                        item={item}
                        handleRemoveItem={handleRemoveItem}>
                    </ReviewItems>)
                }
                </div>
            </div>
            <div className='savedCart-container'>
                <Cart cart={cart}
                handleClearCart={handleClearCart}>
                    <Link className='proceed-link' to='/checkout'>
                        <button className='btn-proceed'>Proceed to Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;