// import { Spinner } from 'reactstrap';
import { useEffect, useState } from "react";
import { getData } from '../../helpers/getData'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { Spinner } from "reactstrap";

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { typeId } = useParams()
    console.log(typeId);

    useEffect(() => {
        setLoading(true)

        getData()
            .then((res) => {
                if (!typeId) {
                    setProducts(res)
                } else {
                    setProducts(res.filter((prod) => prod.type === typeId))
                }
            })
            .catch((error) => {
                console.log(error)
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