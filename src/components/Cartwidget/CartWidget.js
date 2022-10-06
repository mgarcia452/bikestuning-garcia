import { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import './CartWidget.css'

export const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)
    return (
        <button className='carrito-container' alt="">
            {cartQuantity() > 0 &&
                <>
                    <Link to={'/Cart'}><BsCart4 className='carrito-bs' /></Link>
                    <span>{cartQuantity()}</span>
                </>
            }
        </button>
    )
}