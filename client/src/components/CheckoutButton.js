import React, {useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';

const CheckoutButton = ({price, setTotalPrice, setCart }) => {
    const [order, setOrder] = useState([])
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_STRIPE;

    const newOrder = {
        total_price: order.totalprice,
        ordered: order.ordered 
     }

     function onCreateOrder(newProd) {
        setOrder([...order, newOrder])
      }

    const onSuccess = token => {
        console.log(token);
        alert('Payment Successful!');
       
        
    
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