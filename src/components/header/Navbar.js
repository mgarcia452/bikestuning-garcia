import './Navbar.css';
import { CartWidget } from '../header/cartwidget/CartWidget'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-danger">
                <CartWidget />
                <div className="container">

                    <Link to="/" className="Nav navbar-brand" >
                        <img src="./assets/moes.png" className="moes moes-shadow" alt="logo"></img>
                    </Link>

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
                    </ul>
                </div>
            </nav>
        </div>
    )
}