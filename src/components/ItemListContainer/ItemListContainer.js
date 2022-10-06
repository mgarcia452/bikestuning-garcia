import ItemList from '../ItemList/ItemList';
import { Spinner } from "reactstrap";
import useProducts from '../../hooks/useProducts';

const ItemListContainer = () => {

    const { products, loading } = useProducts()

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