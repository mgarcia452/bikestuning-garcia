import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const useProducts = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { typeId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productsRef = collection(db, 'poducts')
        const q = typeId
            ? query(productsRef, where('type', '==', typeId))
            : productsRef

            getDocs(q)
            .then((resp) => {
                const productsDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProducts(productsDB)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [typeId])

    return ({
        products, loading
    })
}

export default useProducts