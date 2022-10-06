import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ product }) => {
    return (
        <section className='backgroundMine'>
            <Link to={`/item/${product.id}`} className="my-2 text-link"><img src={product.img} alt="" />
                <p><b>Type: {product.type}</b></p>
                <h4>{product.part}</h4>
                <p>Price $: {product.price}</p>
            </Link>
            {product.stock > 0
                ?
                <Link to={`/item/${product.id}`} className="btn btn-primary my-2">See more</Link>
                :
                <p className='btn btn-danger'>no stock</p>
            }
        </section>
    )
}
export default Item