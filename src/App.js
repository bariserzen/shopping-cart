import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//components
import Home from './components/Home';
import Cart from "./components/Cart";
import { CartProvider } from "react-use-cart";



const  App = () => {

  return (
    <>
      <CartProvider>
      <Home />
      <Cart />
      </CartProvider>
    </>
  );
}

export default App;
