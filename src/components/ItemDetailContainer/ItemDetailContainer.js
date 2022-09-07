import { useEffect, useState } from "react"
import { getData } from "../../helpers/getData"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(  ()   => {
        setLoading(true)

        getData()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [])

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