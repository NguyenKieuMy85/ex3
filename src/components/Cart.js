import React from "react";
import { useCart } from "./CartContext";

export const Cart = () => {
  const { cart, dispatch } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}{" "}
                <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <h3>Total price: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};
