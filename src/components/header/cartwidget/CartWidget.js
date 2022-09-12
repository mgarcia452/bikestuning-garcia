import './CartWidget.css'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    return (
        <button className='carrito-container' alt="">
            <Link to={'/Cart'}> <img src='./assets/cart.png' className="moes carrito-colores"></img> </Link>
        </button>
    )
}