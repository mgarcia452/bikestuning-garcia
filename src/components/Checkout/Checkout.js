import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from "../../firebase/config"

const Checkout = () => {

    const { cart, cartTotal, finishPurchaseWithSwal, finishPurchase } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        name: '',
        email: '',
        address: ''
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const order = {
            buyer: values,
            items: cart,
            total: cartTotal()
        }

        if (values.name.length < 2) {
            alert('name incorrecto')
            return
        }

        if (values.email.length < 2) {
            alert('email incorrecto')
            return
        }

        const ordersRef = collection(db, 'order66')

        addDoc(ordersRef, order)
            .then((doc) => {
                console.log(doc.id)
                // finishPurchaseWithSwal(doc.id)
                setOrderId(doc.id)
                finishPurchase()
            })
    }

    if (orderId) {
        return (
            <div className='container my-2'>
                <h2> successful purchase</h2>
                <hr />
                <p>
                    your purchase order number es: <b>{orderId}</b>
                </p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className='container my-2'>
            <h2>Checkout</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    name='name'
                    onChange={handleInputChange}
                    value={values.name}
                    type={'text'}
                    className='form-control my-3'
                    placeholder='name?'
                />

                <input
                    name='email'
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'}
                    className='form-control my-3'
                    placeholder='email?'
                />

                <input
                    name='address'
                    onChange={handleInputChange}
                    value={values.address}
                    type={'address'}
                    className='form-control my-3'
                    placeholder='address?'
                />

                <button type='submit' className='btn btn-primary'> Submit </button>
            </form>
        </div>
    )
}

export default Checkout