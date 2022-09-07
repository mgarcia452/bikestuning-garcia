

import Item from './Item'
const ItemList = ({ products = [] }) => {

    return (
        <div className="container my-4 achus">
            {products.map((prod) =>
                <Item product={prod} key={prod.id} />
            )}
        </div>
    )
}

export default ItemList