import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-danger">
                {/* <CartWidget /> */}
                <div className="container">

                    <Link to="/" className="Nav navbar-brand" >
                        <img src="./assets/moes.png" className="moes moes-shadow" alt="logo"></img>
                    </Link>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/products" className="nav-link">Products</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}