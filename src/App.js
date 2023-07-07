
import './App.css';
import { useState, useEffect } from "react";

import Header from './header/Header';
import Main from './main/Main';
import Cart from './header/Cart';

function App() {

  const [newProductNr, setNewProductNr] = useState(1);

  const [cartOpen, setCartOpen] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);
  var [productNr, setProductNr] = useState(1);
  var [price, setPrice] = useState(125);
  var [newPrice, setNewPrice] = useState(price);


  const handleCart = (e) => {
    setCartOpen(!cartOpen);
  };
  const handleCartClose = (e) =>{
    setCartOpen(false);
  }
  const handleDelete = (e) => {
    setCartEmpty(true);
}

  return (
    <div className="App">
      <div className="content-container"  >
        <Header productNr={productNr} newProductNr={newProductNr} handleCartClose={handleCartClose} cartEmpty={cartEmpty} handleCart={handleCart}  ></Header>
        <Main handleDelete={handleDelete} newProductNr={newProductNr} setNewProductNr={setNewProductNr} productNr={productNr} price={price} newPrice={newPrice} setNewPrice={setNewPrice} cartOpen={cartOpen} handleCartClose={handleCartClose} setProductNr={setProductNr} cartEmpty={cartEmpty} setCartEmpty={setCartEmpty}></Main>

      </div>
      <Cart newProductNr={newProductNr} cartOpen={cartOpen} cartEmpty={cartEmpty} productNr={productNr} price={price} newPrice={newPrice} handleDelete={handleDelete}></Cart>

    </div>
  );
}

export default App;
