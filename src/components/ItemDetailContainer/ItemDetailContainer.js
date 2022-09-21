// import { getData } from "../../helpers/getData"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'poducts', itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem({ id: doc.id, ...doc.data() })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div>
            {
                loading
                    ? <h2>Loading...</h2>
                    : <ItemDetail item={item} />
            }


        </div>
    )
}

export default ItemDetailContainer