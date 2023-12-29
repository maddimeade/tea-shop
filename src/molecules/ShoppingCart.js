import React, { useContext, useEffect, useState} from 'react';
import { REMOVE_FROM_CART } from '../atoms/Constants';
import { TeaShopContext } from "./TeaShopProvider";

//useContext

//useEffect

const ShoppingCart = () => {
  const { cartState, dispatch } = useContext(TeaShopContext);
  const [cartTotal, setCartTotal] = useState(0);
  
  useEffect(() => {
    const total = cartState.cart.reduce((acc, item) => acc + item.price, 0);
    setCartTotal(total);

  }, [cartState]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartState.cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: item.id })}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total</h3>
      <p>{cartTotal}</p>
    </div>
  );
};

export default ShoppingCart;