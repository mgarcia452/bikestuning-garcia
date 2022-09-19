import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle, CardFooter } from 'reactstrap';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemListContainer/ItemCount';
import './ItemDetail.css';


const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(0)

    const { cart, addToCart, isInCart } = useContext(CartContext)
    console.log(cart)

    const { id, off, type, part, hp, stock, price, img } = item;

    const handleLoad = (count) => {
        const itemToCart = {
            id: item.id,
            type: item.type,
            part: item.part,
            hp: item.hp,
            price: item.price,
            off: item.off,
            cantidad
        }
        count > 0 ? addToCart(itemToCart) : console.log("no se puede agregar");
    }

    return (
        <div>
            <Card className="my-3 cards-parts" style={{ width: '17rem' }}>
                <CardBody className='card-body'>
                    <img src={img} alt="" ></img>
                    <CardTitle tag="h4">Type: {type}</CardTitle>
                    <CardText> {part} </CardText>
                    <CardText> Power increase %: {hp} </CardText>
                    {/* {off && <CardText> {off}% OFF! </CardText> } */}
                    {isInCart(item.id) ?
                    <>
                        <Link to='/Cart' className="btn btn-success"> Cart </Link>
                        <Link to='/' className="btn btn-info"> products </Link>
                    </>:
                        <ItemCount
                        className='buttons-addrest'
                        stock={stock}
                        handleLoad={handleLoad}
                        count={cantidad}
                        setCount={setCantidad}
                        />
                    }
                </CardBody>
                <CardFooter>
                    <p>Stock: {stock} </p>
                    <p>Price : ${price}</p>
                        {(cantidad > 1 && off) && <CardText> {off}% OFF! </CardText>}
                </CardFooter>

            </Card>
        </div>
    )
}

export default ItemDetail