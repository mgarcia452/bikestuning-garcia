import { CartWidget } from "../cartwidget/CartWidget"
import './Navbar.css';

export const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-danger">
                <CartWidget />
                <div class="container">
                    <a id="logo" className="Nav" class="navbar-brand" href="#"><img src="./assets/moes.png" className="moes moes-shadow"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-expanded="false">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Products</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}