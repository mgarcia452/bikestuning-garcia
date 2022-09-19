import { createContext, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + (item.cantidad * item.price), 0)
    }

    const powerTotal = () => {
        return cart.reduce((acc, item) => acc + item.hp, 0)
    }
    
    const isOff = () => {
        return cart.reduce((acc, item) => acc + ((item.cantidad * item.price) - (item.cantidad * item.price * (item.off / 100))), 0)
    }

    const emptyCart = () => {

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            background: '#000',
            color: '#FFFFFF',
            confirmButtonColor: '#1894d6',
            cancelButtonColor: '#d44',
            confirmButtonText: 'Yes, empty it!'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([])                   
            }
        })
    }
   

    return (
        <CartContext.Provider value={
            {
                cart,
                addToCart,
                isInCart,
                cartQuantity,
                cartTotal,
                emptyCart,
                removeItem,
                powerTotal,
                isOff,
            }
        }>
            {children}
        </CartContext.Provider>
    )
}