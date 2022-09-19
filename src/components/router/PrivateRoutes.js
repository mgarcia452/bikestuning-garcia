import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from '../../components/header/Navbar'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'
import Cart from '../../components/Cart/Cart';


const PrivateRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/productos/:typeId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='*' element={<Navigate to="/" />} />
                <Route path='/Cart' element={<Cart />} />
            </Routes>
        </>
    )
}

export default PrivateRoutes


