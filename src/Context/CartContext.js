import { createContext, useContext, useState } from "react";
import Swal from 'sweetalert2'

// isOFf para aplcar los descuentos en el momento
// powerTotal para calcular la potencia estimada con las partes seleccionadas (similar a un importe total)

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
        return cart.reduce((acc, item) => acc + item.amount, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + (item.amount * item.price), 0)
    }

    const powerTotal = () => {
        return cart.reduce((acc, item) => acc + item.hp, 0)
    }

    const isOff = () => {
        return cart.reduce((acc, item) => acc + ((item.amount * item.price) - (item.amount * item.price * (item.off / 100))), 0)
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

    const finishPurchase = () => {
        setCart([])
    }

    const finishPurchaseWithSwal = (id) => {
        Swal.fire({
            title: 'succesful purchase',
            text: `you buying order is: ${id}`,
            icon: 'success',
            background: '#000',
            color: '#FFFFFF',
            confirmButtonColor: '#1894d6',
            confirmButtonText: 'DO it!'
        })
        setCart([])
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
                finishPurchaseWithSwal,
                finishPurchase
            }
        }>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}