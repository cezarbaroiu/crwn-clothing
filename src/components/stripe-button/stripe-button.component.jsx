import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price*100;
  const publisableKey = 'pk_test_51HqDVgJol6S3IlMZP4xrAma3bA6UB9ZgkWOeQzpfpBgh7w8EbmVEVuUaxKIOQTSUQtavcfLAg93Zu9xdTvwlPI1800s1U9u6Dz';
  
  const onToken = token => {
    console.log(token);
    alert('Payment successful')
  }

  return (
    <StripeCheckout 
      label = 'Pay now'
      name = 'CRWN Clothing Ltd'
      billingAddress
      shippingAddress
      image = 'https://svgshare.com/i/CUz.svg'
      description = { `Your total amount is $${price}` }
      amount = { priceForStripe }
      panelLabel = 'Pay now'
      token = { onToken }
      stripeKey = { publisableKey }
    />
  )
};

export default StripeCheckoutButton;