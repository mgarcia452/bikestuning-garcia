import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import { Spinner } from 'reactstrap';

const arrayProducts = [
    { id: 1, type: "intake", part: "filter", hp: 2, stock: 100, price: 600, img: 'public/assets/products/airfilter.jpg' },
    { id: 2, type: "intake", part: "funnel", hp: 2, stock: 15, price: 80, img: 'public/assets/products/funnel.jpg' },
    { id: 3, type: "intake", part: "ram", hp: 5, stock: 50, price: 300, img: 'public/assets/products/ram.jpg' },
    { id: 4, type: "exhaust", part: "muffler", hp: 2, stock: 50, price: 1000, img: 'public/assets/products/muffler.jpg' },
    { id: 5, type: "exhaust", part: "full-system", hp: 20, stock: 10, price: 1750, img: 'public/assets/products/full.jpg' },
    { id: 6, type: "ecu", part: "stage1", hp: 5, stock: 100, price: 300, img: 'public/assets/products/stage1.jpg' },
    { id: 7, type: "ecu", part: "stage2", hp: 12, stock: 100, price: 450, img: 'public/assets/products/stage2.jpg' },
    { id: 8, type: "fuel", part: "inyectors", hp: 3, stock: 10, price: 1200, img: 'public/assets/products/inyector.jpg' },
    { id: 9, type: "fuel", part: "pump", hp: 1.01, stock: 8, price: 400, img: 'public/assets/products/pump.jpg' },
    { id: 10, type: "camshaft", part: "street", hp: 8, stock: 5, price: 300, img: 'public/assets/products/street.jpg' },
    { id: 11, type: "camshaft", part: "racing", hp: 12, stock: 3, price: 500, img: 'public/assets/products/racing.jpg' },
    { id: 12, type: "polish", part: "port", hp: 3, stock: 50, price: 700, img: 'public/assets/products/port.jpg' },
    { id: 13, type: "polish", part: "head", hp: 5, stock: 50, price: 1000, img: 'public/assets/products/head.jpg' },
    { id: 14, type: "turbo", part: "stage1", hp: 25, stock: 1, price: 8000, img: 'public/assets/products/turbo-st1.jpg' },
    { id: 15, type: "turbo", part: "stage2", hp: 38, stock: 0, price: 14000, img: 'public/assets/products/turbo-st2.jpg' },
    { id: 16, type: "crankshaft", part: "crankshaft", hp: 8, stock: 2, price: 6500, img: 'public/assets/products/crankshaft.jpg' }
]
const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = () => {
        const error = false;

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!error) { resolve(arrayProducts) }
                else {
                    reject(alert("error"));
                }
            }, 2000)
        }
        )
    }

    useEffect(() => {
        getData()
            .then(res => {
                setData(res)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, []);


    return (
        <>
            {
                loading ? <Spinner color="danger" />
                    :
                    <div className="row">
                        {
                            data.map(product => (
                                <div className='col-3'>
                                    <ItemCard key={product.id} type={product.type} part={product.part} hp={product.hp} stock={product.stock} price={product.price} img={product.img} />
                                </div>
                            ))
                        }
                    </div>
            }
        </>
    )
}

export default ItemListContainer;