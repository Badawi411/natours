/* eslint-disable */
// import { Stripe } from 'stripe';
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51N4k1cC894NyaASL3wzYV7oghdUxIemKX1rm3QBq9r3x8SsHv8NiI005tau20hiIjBOG0pFQvYO5vTp9XVTmUdgj00cl9oqX5I',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
