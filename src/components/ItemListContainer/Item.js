import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ product }) => {
    return (
        <section className='backgroundMine'>
            <div>
                <img src={product.img} alt="" />
                <h4>{product.part}</h4>
                <p>Price $: {product.price}</p>
                <small>Stock: {product.stock}</small>
                <p>{product.type}</p>
                <Link to={`/item/${product.id}`} className="btn btn-primary my-2">See more</Link>
            </div>
        </section>
    )
}
export default Item