import React, { useState } from 'react'
import './Checkout.css'; // Import the CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { cartValue, clearCart } from '../../redux/cartRedux';
import { addOrderProduct } from '../../redux/orderRedux';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';

const Checkout = () => {
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();
  const cart = useSelector(cartValue)
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePlaceOrder = () => {
    try {
      const data = {
        name:name,
        address:address,
        email:email,
        data:[...cart.products]
      }
      dispatch(addOrderProduct(data))
      dispatch(clearCart())
      enqueueSnackbar("Order Placed SuccessFully", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      navigate('/')
    } catch (error) {
      enqueueSnackbar("Some Error Occourd", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }
      
  };


  return (
    // <div className="checkout-mainContainer">
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form>
        <label className='checkout-label'>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label className='checkout-label'>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>
        <label className='checkout-label'>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label className='checkout-label'>
          Payment Method:
          <select className='checkout-select' value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="">Select Payment Method</option>
            {/* <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option> */}
            <option value="cash">Cash on Delivery</option>
            {/* Add options for other payment methods */}
          </select>
        </label>
        <label className='checkout-label checkout-total'>
          Total: ₹{cart.total.toFixed(2)}
        </label>
        <button disabled={paymentMethod !=="cash"?true:false} className='checkout-orderButton' type="button" onClick={handlePlaceOrder}>Place Order</button>
      </form>
    </div>
    // </div>
  );
};

export default Checkout;
