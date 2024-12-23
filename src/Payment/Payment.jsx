import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import useCart from '../hooks/useCart';
import CheckoutFrom from './StripWorking/CheckoutFrom';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum,item) =>sum + item.price,0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full'>
            <h1>This is payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutFrom cart={cart} price={price}></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;