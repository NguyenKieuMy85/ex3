import React from "react";
import { useCart } from "./CartContext";

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 699 },
  { id: 3, name: "Headphones", price: 199 },
];

export const ProductList = () => {
  const { dispatch } = useCart();

  return (
    <div>
      <h2>Product</h2>
      {products.map(product => (
        <div key={product.id}>
          <p>
            {product.name} - ${product.price}
          </p>
          <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};
