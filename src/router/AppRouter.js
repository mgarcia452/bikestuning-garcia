import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useLoginContext } from '../../src/Context/LoginContext'
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import '../components/Cartwidget/CartWidget.css'

const AppRouter = () => {

    const { user } = useLoginContext()

    return (
        <BrowserRouter>
            {
                user.logged
                    ? <PrivateRoutes />
                    : <PublicRoutes />
            }
        </BrowserRouter>
    )
}

export default AppRouter