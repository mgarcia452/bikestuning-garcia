import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useLoginContext } from '../../Context/LoginContext'
// import { Navbar } from '../../components/header/Navbar.js'

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {

    const { user } = useLoginContext()

    return (
        <BrowserRouter>
            {
                user.logged
                    ? <PrivateRoutes />
                    :
                    <PublicRoutes />
            }
        </BrowserRouter>
    )
}

export default AppRouter