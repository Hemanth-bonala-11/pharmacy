import React, { useState, useEffect } from 'react';
import { fetchCartDetails } from '../api/cartApi';

const CartPage = () => {
  const [cartData, setCartData] = useState(null);
  const isLoggedIn = localStorage.getItem("auth_token")

  useEffect(() => {
    if (isLoggedIn) {
      getCart();
    }
  }, [isLoggedIn]);

  const getCart = () => {
    fetchCartDetails()
      .then(response => {
        setCartData(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart data:', error);
      });
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartData ? (
        <ul>
          {cartData.items.map(item => (
            <li key={item.id}>
              Product ID: {item.id}, Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>{isLoggedIn ? 'Loading cart...' : 'User not logged in.'}</p>
      )}
    </div>
  );
};

export default CartPage;
