import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from "../../firebase/config"
import useForm from '../../hooks/useForm'

const Checkout = () => {

    const { cart, cartTotal, finishPurchase } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const { values, handleInputChange } = useForm({
        name: '',
        email: '',
        address: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault()

        const order = {
            buyer: values,
            items: cart,
            total: cartTotal()
        }

        if (values.name.length < 2) {
            alert('wrong name')
            return
        }

        if (values.email.length < 2) {
            alert('wrong email')
            return
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'order66')
        const productsRef = collection(db, 'poducts')

        const q = query(productsRef, where(documentId(), 'in', cart.map(item => item.id)))

        const products = await getDocs(q)

        const outOfStock = []

        products.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.amount) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.amount
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, order)
                        .then((doc) => {
                            console.log(doc.id)
                            setOrderId(doc.id)
                            finishPurchase()
                        })
                })
        } else {
            alert("Hay items sin stock")
            console.log(outOfStock)
        }
    }

    if (orderId) {
        return (
            <div className='container my-2 purchase'>
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