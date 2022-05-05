import React, {useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const CheckoutButton = ({price, setTotalPrice, setCart }) => {
    const [order, setOrder] = useState([])
    const [message, setMessage] = useState("");
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_STRIPE;

    const Message = ({ message }) => (
        <section>
          <p>{message}</p>
        </section>
      );



    useEffect(() => {
        getOrders();
      }, []);
      
      const getOrders = () => {
        fetch("/orders")
        .then((r) => r.json())
        .then(console.log);
      }
     
      const newOrder = {
        total_price: order.total_price,
        ordered: order.ordered 
     }

     function onCreateOrder(newOrder) {
        setOrder([...order, newOrder])
      }

    const onSuccess = token => {
        console.log(token);
        alert('Order placed! You will receive an email confirmation.');
       
        
    
        fetch(`/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newOrder),
          })
          .then((r) => {
              if (r.ok) {
                r.json().then((order) => onCreateOrder(order));
            }
          })

        // to do: [x]clear cart, []update quantities in backend, []save order to backend
        // []patch to update quantities
        // []post order details
        afterSuccessfulPayment();
    };
    
    const afterSuccessfulPayment = () => {
        setTotalPrice(0);
         setCart([])
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Kater Gallery'
            billingAddress
            shippingAddress
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onSuccess}
            stripeKey={publishableKey}
        />
    )
}

export default CheckoutButton;