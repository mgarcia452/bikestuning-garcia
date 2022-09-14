import './App.css'
import { Navbar } from './components/header/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartContext } from './Context/CartContext';
import { useState } from 'react';


const App = () => {

  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

  return (
    <CartContext.Provider
      value={
        {
          cart,
          addToCart,
          isInCart,
          cartQuantity
        }
      }>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:typeId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<Navigate to="/" />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </CartContext.Provider>
  );
}

export default App;