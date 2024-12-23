import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from 'react';
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import useAuth from "../../hooks/useAuth";

const CheckoutFrom = ({ price, cart }) => {
  const stripe = useStripe();
  const element = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState('')
  const [axiosSecure] = useAxiosSecure()
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
   if(price > 0){
     axiosSecure.post('/create-payment-intent', { price })
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret);
      })
   }
  }, [price, axiosSecure])

  //Card ar form 
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !element) {
      return
    }

    const card = element.getElement(CardElement);
    if (card === null) {
      return
    }
    console.log('card', card)

    //payment method Create , 
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error', error)
      setCardError(error.message);
    }
    else {
      setCardError('');
      console.log('payment Method', paymentMethod)
    }
    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displyName || 'anonymous'
          },
        },
      },
    );

    if (confirmError) {
      console.log(confirmError);
    }
    console.log('payment intent', paymentIntent)
    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        status: 'service pending',
        cartItems: cart.map(item => item._id),
        menuItems: cart.map(item => item.menuItemId),
        itemNames: cart.map(item => item.name)
      }
      axiosSecure.post('/payments' , payment)
      .then(res =>{
        console.log(res.data);
        if(res.data.insertedId){
          //
        }
      })
    }

  }


  return (
    <div className="w-2/3 m-8 mt-10">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

        <button className="btn btn-xs btn-error mt-5" type="submit" disabled={!stripe || !clientSecret || processing}>Pay</button>

      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionId && <p className="text-green-500">{transactionId}</p>}
    </div>

  );
};

export default CheckoutFrom;