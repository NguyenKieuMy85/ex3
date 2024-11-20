import React from "react";
import { CartProvider } from "./components/CartContext";
import { ProductList } from "./components/Productlist";
import { Cart } from "./components/Cart";

const App = () => {
  return (
    <CartProvider>
      <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
