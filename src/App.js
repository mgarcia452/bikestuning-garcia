import './App.css'
import { Navbar } from './components/header/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {

  return (

    <div className='app-body'>

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:partId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;