import React, { useState } from 'react'
import ContadorConrado from './ContadorConrado'

const ItemDetailConrado = ({ item }) => {

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        console.log({
            ...item,
            cantidad
        })
    }

    return (
        <div className='container my5'>
            <img src={item.img} />
            <h3>{item.nombre}</h3>
            <p>{item.desc} </p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>
            <hr />

            <ContadorConrado
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}
            />

        </div>
    )
}

export default ItemDetailConrado