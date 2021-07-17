import react from 'react';
import {loadStripe} from '@stripe/stripe-js'
import { element, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import "";
import './App.css';

const stripePromise = loadStripe(" FALTA KEY PROBE ")

const checkoutForm = () => {
  const stripe = useStripe();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: useElements.getElement(CardElement)
    });
    if (error) {
      console.log(paymentMethod)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
    <img 
      src="" 
      alt=" vehiculo "
      className= "img-fluid"
    />
    <CardElement/>
    <button> buy </button>
  </form>

  };
};

  function App() {
    return (
      <Elements stripe ={};
        <div className="container p-4"
          <div classname= "row">
            <div classname="col-md-4 offset-md-4">

            </div>
          </div>
    )
  }


