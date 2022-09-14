import './Navbar.css';
import { CartWidget } from '../header/cartwidget/CartWidget'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md">
                <Link to="/" className="Nav navbar-brand" >
                    <img src="./assets/moes.png" className="moes moes-shadow" alt="logo"></img>
                </Link>
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productos/intake" className="nav-link">Intake</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productos/exhaust" className="nav-link">Exhaust</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/prueba" className="nav-link">Prueba</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/prueba2" className="nav-link">Prueba2</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget className="carrito-widye"/>
            </nav>
        </div>
    )
}