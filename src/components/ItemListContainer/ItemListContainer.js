import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { typeId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productsRef = collection(db, 'poducts')
        const q = typeId
                ? query(productsRef, where ('type', '==', typeId) )
                : productsRef

        getDocs(q)
            .then((resp) => {
                const productsDB = resp.docs.map( (doc) => ({ id: doc.id, ...doc.data() }))
                console.log(productsDB)
                setProducts(productsDB)
            })
            .finally(() => {
                 setLoading(false)
            })

    }, [typeId])

    return (
        <div>
            {
                loading
                    ? <Spinner color="danger" className="spinnercito" />
                    : <ItemList products={products} />
            }
        </div>
    )
}

export default ItemListContainer;