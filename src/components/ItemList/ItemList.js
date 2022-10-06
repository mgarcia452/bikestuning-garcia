import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ products = [] }) => {

    return (
        <div>
            <img src='/assets/yamaha-trio.jpg' alt='' className="image-banner"></img>
            <h4 className="catalogo"> CATALOGO </h4>
            <div className="container my-4 cards-list">
                {products.map((prod) =>
                    <Item product={prod} key={prod.id} />
                )}
            </div>
        </div>
    )
}

export default ItemList