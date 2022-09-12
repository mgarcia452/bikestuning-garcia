import './App.css'
import { Navbar } from './components/header/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Prueba from './components/Clases/Prueba';
import Prueba2 from './components/Clases/Prueba2';
import Cart  from './components/Cart/Cart';

const App = () => {

  return (

    <div className='app-body'>

      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:typeId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<Navigate to="/" />} />
          <Route path='/Cart' element={<Cart/>} />
          {/* <Route path='/prueba' element={<Prueba />} /> */}
          {/* <Route path='/prueba2' element={<Prueba2 />} /> */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;