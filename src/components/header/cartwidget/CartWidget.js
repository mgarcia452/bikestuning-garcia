import './CartWidget.css'
import { Link } from 'react-router-dom'
import { BsCart4 } from 'react-icons/bs'
import { useContext } from 'react'
import { CartContext } from '../../../Context/CartContext'

export const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)
    return (
        <button className='carrito-container' alt="">
            <Link to={'/Cart'}><BsCart4 className='carrito-bs'/></Link>
            <span>{cartQuantity()}</span>
        </button>
    )
}